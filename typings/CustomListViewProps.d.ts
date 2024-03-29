/**
 * This file was generated from CustomListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { EditableValue, ListValue, ListActionValue, ListWidgetValue } from "mendix";
import { Big } from "big.js";

export interface CustomListViewProps<Style> {
    name: string;
    style: Style[];
    ds: ListValue;
    container: ListWidgetValue;
    scrollView: boolean;
    onClick?: ListActionValue;
    emptyMessage: string;
    scrollToItem?: EditableValue<boolean>;
    scrollItem?: EditableValue<Big>;
    windowSize: number;
    initialNumToRender: number;
    maxNumberToRenderPerBatch: number;
    cellBatchingSize: number;
    removeClippedSubviews: boolean;
    useItemLayout: boolean;
    itemSize: Big;
}

export interface CustomListViewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    ds: {} | { caption: string } | { type: string } | null;
    container: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    scrollView: boolean;
    onClick: {} | null;
    emptyMessage: string;
    scrollToItem: string;
    scrollItem: string;
    windowSize: number | null;
    initialNumToRender: number | null;
    maxNumberToRenderPerBatch: number | null;
    cellBatchingSize: number | null;
    removeClippedSubviews: boolean;
    useItemLayout: boolean;
    itemSize: number | null;
}
