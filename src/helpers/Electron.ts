import store from "../store";

export interface INotificationData {
    title: string;
    body?: string;
}

export default class Electron {
    public static isLocal() {
        return document.location.href.indexOf("build") !== -1;
    }

    private static getElectronStore() {
        if ((window as any).electronStore) return (window as any).electronStore;
        else return null;
    }

    public static getStoreProp(prop: string) {
        let store = this.getElectronStore();
        if (store) return store.get(prop);
    }

    public static setStoreProp(prop: string, value: any) {
        let store = this.getElectronStore();
        if (store) store.set(prop, value, true);
        Electron.sendIpcRenderer("save-settings-prop", { prop, value });
    }

    public static copyString(s: string) {
        if ((window as any).electronClipboard) (window as any).electronClipboard.writeText(s);
    }

    public static changeLocale() {
        Electron.setStoreProp("locale", store.locale);
    }

    public static toggleAutostart() {
        Electron.setStoreProp("autostart", store.autostart);
        Electron.sendIpcRenderer("toggle-autostart");
    }

    public static updateTrayIcon(level: number, hasChanges?: boolean) {
        if (!level || !+level || level > 4 || level < 1) level = 4;
        Electron.sendIpcRenderer("update-icon", { level: level, hasChanges: !!hasChanges });
    }

    public static updateTrayIconDot(hasChanges: boolean) {
        Electron.sendIpcRenderer("update-icon-dot-only", !!hasChanges);
    }

    public static openUrl(url: string) {
        if ((window as any).shell && (window as any).shell.openExternal) (window as any).shell.openExternal(url);
    }

    public static isDev() {
        if ((window as any).isDev) return true;
        else return false;
    }

    public static toggleConsole() {
        if ((window as any).electronRemote) (window as any).electronRemote.getCurrentWindow().toggleDevTools();
    }

    public static getIpcRenderer() {
        if ((window as any).ipcRenderer) return (window as any).ipcRenderer;
        else return null;
    }

    public static sendIpcRenderer(channel: string, data?: any) {
        let ipc = this.getIpcRenderer();
        if (ipc) ipc.send(channel, data);
    }

    public static updateApp() {
        Electron.sendIpcRenderer("update-app");
    }

    public static showNativeNotif(data: INotificationData) {
        Electron.sendIpcRenderer("show-notification", data);
    }

    public static checkForUpdates(cyclic?: boolean) {
        if (cyclic) {
            setInterval(() => {
                this.checkForUpdates();
            }, 1000 * 60 * 60);

            setInterval(() => {
                if (store.updateStatus !== "ready" && store.updateStatus !== "downloading" && !Electron.isDev() && store.view === "main") {
                    const href = "https://flowerpot-pwa.web.app/firebase-entry-point.html?salt=x" + Math.floor(Math.random() * 100000000);
                    document.location.href = href;
                }
            }, 1000 * 60 * 61);
        }

        let ipcRenderer = Electron.getIpcRenderer();
        if (ipcRenderer) {
            ipcRenderer.on("checking_for_update", () => {
                ipcRenderer.removeAllListeners("checking_for_update");
                store.updateStatus = "checking";
            });
            ipcRenderer.on("update_not_available", () => {
                ipcRenderer.removeAllListeners("update_not_available");
                store.updateStatus = "none";
            });
            ipcRenderer.on("update_available", () => {
                ipcRenderer.removeAllListeners("update_available");
                store.updateStatus = "downloading";
            });
            ipcRenderer.on("update_downloaded", () => {
                ipcRenderer.removeAllListeners("update_downloaded");
                store.updateStatus = "ready";
            });
            ipcRenderer.on("update_error", () => {
                ipcRenderer.removeAllListeners("update_error");
                store.updateStatus = "error";
            });
            ipcRenderer.send("check-for-updates");
        }
    }

    public static reactIsReady() {
        Electron.sendIpcRenderer("react-is-ready");
    }
}
