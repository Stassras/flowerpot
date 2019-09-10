import React from "react";
import { Header, Button, Container } from "semantic-ui-react";
import store from "../store";
import Electron from "../helpers/Electron";
import WorkItem from "../helpers/WorkItem";

interface IProps {}
interface IState {}

export default class DebugView extends React.Component<IProps, IState> {
    changeIconLevel = (level: number) => {
        Electron.updateTrayIcon(level, true);
    };

    showNotif = () => {
        new Notification("title", { body: "body" });
    };

    showNotifNative = () => {
        Electron.showNativeNotif({ title: "test1", body: "test2" });
    };

    setChanges = () => {
        let wi = WorkItem.fish();
        wi.id = 108920;
        store.setWIHasChanges(wi, true);
    };

    render() {
        return (
            <div className="Page">
                <div className="TopBar">
                    <Header as="h1">DebugView</Header>
                    <div className="RightTopCorner"></div>
                </div>
                <Container fluid>
                    <Header as="h3" dividing>
                        Electron
                    </Header>
                    <Button onClick={() => Electron.toggleConsole()}>console</Button>
                    <Header as="h3" dividing>
                        Views
                    </Header>
                    <Button onClick={() => store.switchView("main")}>main</Button>
                    <Button onClick={() => store.switchView("error")}>error</Button>
                    <Button onClick={() => store.switchView("loading")}>loading</Button>
                    <Button onClick={() => store.switchView("settings")}>settings</Button>
                    <Button onClick={() => store.switchView("credentials")}>credentials</Button>
                    <Button onClick={() => store.switchView("selectqueries")}>selectqueries</Button>
                    <Header as="h3" dividing>
                        Icon levels
                    </Header>
                    <Button onClick={() => this.changeIconLevel(1)}>1</Button>
                    <Button onClick={() => this.changeIconLevel(2)}>2</Button>
                    <Button onClick={() => this.changeIconLevel(3)}>3</Button>
                    <Button onClick={() => this.changeIconLevel(4)}>4</Button>
                    <Header as="h3" dividing>
                        Notifs
                    </Header>
                    <Button onClick={() => this.showNotif()}>Show html5</Button>
                    <Button onClick={() => this.showNotifNative()}>Show native electron</Button>
                    <Header as="h3" dividing>
                        More
                    </Header>
                    <Button onClick={() => this.setChanges()}>Set changes to WI</Button>
                </Container>
            </div>
        );
    }
}
