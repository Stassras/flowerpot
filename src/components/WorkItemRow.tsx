import React from "react";
import { IWorkItem } from "../helpers/WorkItem";
import { Table, Popup, Icon } from "semantic-ui-react";
import Electron from "../helpers/Electron";
import store from "../store";
import { observer } from "mobx-react";
import { s } from "../values/Strings";

interface IProps {
    item: IWorkItem;
}

@observer
export default class WorkItemRow extends React.Component<IProps> {
    get isRed() {
        return this.props.item.promptness === 1 || this.props.item.rank === 1;
    }

    get isOrange() {
        return this.props.item.promptness === 2;
    }

    get importanceEl() {
        if (!this.props.item.importance) return undefined;
        return (
            <Popup
                content={s("severity") + this.props.item.importanceText}
                trigger={
                    <span>
                        <Icon name="exclamation triangle" />
                        {this.props.item.importance}
                    </span>
                }
            />
        );
    }

    get promptnessEl() {
        if (!this.props.item.promptness) return undefined;
        return (
            <Popup
                content={s("priority") + this.props.item.promptnessText}
                trigger={
                    <span>
                        <Icon name="clock" />
                        {this.props.item.promptness}
                    </span>
                }
            />
        );
    }

    get rankEl() {
        if (this.props.item.rank === undefined) return undefined;
        return (
            <Popup
                content={"Rank " + this.props.item.rank}
                trigger={
                    <span>
                        <Icon name="chess queen" />
                        {this.props.item.rank}
                    </span>
                }
            />
        );
    }

    get revEl() {
        return (
            <Popup
                content={s("revision")}
                trigger={
                    <span>
                        <Icon name="redo" />
                        {this.props.item.rev}
                    </span>
                }
            />
        );
    }

    get titleEl() {
        return <Popup content={this.props.item.titleFull} trigger={<span>{this.props.item.title}</span>} />;
    }

    get freshnessEl() {
        return (
            <Popup
                content={s("timeSinceCreated")}
                trigger={
                    <span>
                        <Icon name="leaf" />
                        {this.props.item.freshness}
                    </span>
                }
            />
        );
    }

    get typeEl() {
        switch (this.props.item.type) {
            case "Bug":
                return <Icon name="bug" />;
            case "Task":
                return <Icon name="tasks" />;
            case "Issue":
                return <Icon name="question" />;
            default:
                return <span></span>;
        }
    }

    specialNameEffect(name: string) {
        if (name.indexOf("Шершнёв") !== -1) {
            return <Popup content="Этот человек предпочитает функциональное программирование" trigger={<span>{name}</span>} />;
        }

        if (name.indexOf("Тагулова") !== -1) {
            return <span style={{ color: "rgb(90, 45, 31)" }}>{name}</span>;
        }

        return name;
    }

    dropChanges = () => {
        store.setWIHasChanges(this.props.item, false);
    };

    render() {
        let item = this.props.item;
        let hasChanges = store.getWIHasChanges(item);

        return (
            <Table.Row warning={this.isOrange} negative={this.isRed} onClick={this.dropChanges}>
                <Table.Cell collapsing className={hasChanges ? "hasChangesCell" : "hasNoChangesCell"}>
                    {this.typeEl} {item.id}
                </Table.Cell>
                <Table.Cell collapsing>
                    {this.importanceEl} {this.promptnessEl} {this.rankEl}
                </Table.Cell>
                <Table.Cell>
                    <span className="IterationInTitle">{item.iterationPath}</span>
                    <span className={"WorkItemLink " + (hasChanges ? "hasChangesText" : "")} onClick={() => Electron.openUrl(item.url)}>
                        {item.titleFull}
                    </span>
                </Table.Cell>
                <Table.Cell collapsing>{this.specialNameEffect(item.assignedTo)}</Table.Cell>
                <Table.Cell collapsing>{this.specialNameEffect(item.createdBy)}</Table.Cell>
                <Table.Cell collapsing>
                    {this.revEl} {this.freshnessEl}
                </Table.Cell>
            </Table.Row>
        );
    }
}
