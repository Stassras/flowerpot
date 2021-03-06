import store from "../store";
import Version from "./Version";

export default class Telemetry {
    private static async basicMessage(reason: string, extraInfo?: string) {
        if (!store.settings.allowTelemetry) return;

        try {
            const ver = Version.long;
            const name = store.settings.tfsUser;
            if (!name) return;

            const encodedString = btoa(JSON.stringify({ reason, name, ver, extraInfo }));

            await fetch("https://mysweetbot-php.herokuapp.com/flowerpot-usage.php?data=" + encodedString);
        } catch (e) {}
    }

    public static versionUsageInfo() {
        const theme = store.settings.darkTheme ? "dark" : "light";
        const lang = store.locale;
        this.basicMessage("Version installed", `theme=${theme}, lang=${lang}`);
    }

    public static accountVerificationSucceed() {
        this.basicMessage("Account verified");
    }
}
