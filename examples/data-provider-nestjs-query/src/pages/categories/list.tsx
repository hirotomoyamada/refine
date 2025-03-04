import { IResourceComponentsProps } from "@refinedev/core";
import {
    List,
    useTable,
    EditButton,
    DateField,
    getDefaultSortOrder,
    DeleteButton,
} from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Space, Table } from "antd";

import { CATEGORIES_LIST_QUERY } from "./queries";
import { CategoriesListQuery } from "graphql/types";

type ICategory = GetFieldsFromList<CategoriesListQuery>;

export const CategoryList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorters } = useTable<ICategory>({
        initialSorter: [
            {
                field: "id",
                order: "asc",
            },
        ],
        metaData: {
            gqlQuery: CATEGORIES_LIST_QUERY,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
                    sorter
                />
                <Table.Column<ICategory>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                size="small"
                                hideText
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
