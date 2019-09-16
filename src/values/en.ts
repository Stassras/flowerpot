import { ILocalizedStrings } from "./Strings";

const en: ILocalizedStrings = {
    //settings view
    refresh1m: "1 minute",
    refresh3m: "3 minutes",
    refresh5m: "5 minutes",
    refresh10m: "10 minutes",
    refreshdebug: "(debug) 10 seconds",
    sortPatternWeight: "Weight, Date",
    sortPatternAssigned: '"Assigned To", Date',
    sortPatternId: "ID",
    notifModeAll: "All",
    notifModeMine: "Mine only",
    notifModeNone: "None",
    localeAuto: "Auto",
    localeEn: "English",
    localeRu: "Russian",
    updateStateChecking: "Checking for updates...",
    updateStateDownloading: "Downloading update...",
    updateStateReady: "Update ready. Click to install",
    updateStateNone: "Check for updates",
    updateStateError: "Update error. Click try again",
    settingsHeader: "Settings",
    editTfsSettingsBtn: "Edit TFS & Account settings",
    settingsBackButton: "OK",
    settingsQueriesHeader: "Queries to watch",
    settingsOthersHeader: "Others",
    ddLocalesLabel: "Language: ",
    ddRefreshLabel: "Queries refresh rate: ",
    ddShowNotifLabel: "Show notifications: ",
    cbIconLabel: "Change app icon color only on my Work Items events",
    cbAutostartLabel: "Start with Windows (applies on app restart)",
    settingsCreditsHeader: "Credits",
    versionWord: "Version",
    //sel queries view
    loading: "Loading...",
    noQueriesAvailable: "You don't have any available queries. Make sure you added desired ones to Favorites in TFS.",
    selQHeader: "Select Queries",
    cancel: "Cancel",
    add: "Add",
    note: "NOTE!",
    selqNote1: "You can see here only queries that in your ",
    selqNote2: "Favorites",
    selqNote3: " and ",
    selqNote4: "not yet added",
    selqNote5: " to watch list.",
    selqAvailableHeader: "Available queries",
    refresh: "Refresh",
    //main view
    noQueriesToWatch: "No queries to watch",
    noQueriesToWatchText: "Go to settings and add some",
    mainHeader: "Queries",
    settings: "Settings",
    updateArrived: "Update arrived!",
    updateArrivedText1: "Flowerpot update is available. You can",
    updateArrivedText2: "it now by restarting the app.",
    install: "Install",
    //error view
    errorHeader: "Error :(",
    errorMsg: "Something bad happened!",
    errorDesc1: "You can try manually",
    errorDesc2: "page",
    errorDesc3: "Or go to",
    errorDesc4: "to check your account and server",
    tfsSettings: "TFS Settings",
    //creds view
    validate: "Validate",
    status: "Status: ",
    credsNoteText: "You must validate credentials you entered before leaving this page.",
    tfsPwd: "TFS password",
    tfsUser: "TFS username (with domain)",
    tfsPath: "TFS path with collection name (must start with 'http://' and end with '/')",
    credsHeader: "Credentials",
    save: "OK",
    tfsHeader: "TFS & Account settings",
    credsState1: "Not validated yet",
    credsState2: "Validating...",
    credsState3: "Server unavailable or TFS path is wrong",
    credsState4: "Incorrect Username or Password",
    credsState5: "OK",
    //helpers
    throwNoTeams: "No available team projects found",
    throwQueryLoading: "Error while loading query",
    throwAuth: "Cannot authenticate with provided credentials, TFS path is not valid or network problems occured",
    throwUnknown: "Something went wrong during request processing",
    notifNewItem: ": new item",
    notifChangedItem: ": item changed",
    //comps
    timeSinceCreated: "Time since created",
    revision: "Revision",
    priority: "Priority ",
    severity: "Severity ",
    addQuery: "Add query",
    actions: "Actions",
    ignoreNotif: "Ignore Notif.",
    ignoreIcon: "Ignore Icon",
    queryName: "Query name",
    teamProject: "Team project",
    sortPattern: "Work Items sort pattern: ",
    //lists
    manageLists: "Manage custom lists",
    mineOnTop: "Show my Work Items on top",
    settingsWIHeader: "Work Items",
    listsHeader: "Lists",
    favoritesDescription: "IDs of Work Items you will see on top of query results.",
    favorites: "Favorites",
    deferredDescription: "IDs of Work Items you will see at the bottom of query results.",
    deferred: "Deferred",
    hiddenDescription: "IDs of Work Items that will be hidden from result list until something will be changed in them.",
    hidden: "Hidden",
    permawatchDescription: "IDs of Work Items that will be placed in separated query and stay there until manual remove.",
    permawatch: "Permawatch",
    listsNote:
        "Same item cannot be in several lists. If you add in list item that already in another list -- it will be removed from previous one.",
    addItemsInListNotice: "To add items in this list use context menu in Queries view.",
    //context
    copy: "Copy info",
    copyId: "Copy ID",
    removeFromList: "Remove from ",
    addToP: "Add to permawatch",
    addToF: "Add to favorites",
    addToD: "Add to deferred",
    addToH: "Hide until changes",
    openExternal: "Open in browser"
};

export default en;
