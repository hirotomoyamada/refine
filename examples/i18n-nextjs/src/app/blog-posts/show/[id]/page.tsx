"use client";

import {
    DateField,
    MarkdownField,
    NumberField,
    Show,
    TextField,
} from "@refinedev/antd";
import { useOne, useShow, useTranslate } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function BlogPostShow() {
    const t = useTranslate();
    const { queryResult } = useShow({});
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{t("ID")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{t("blog_posts.fields.title")}</Title>
            <TextField value={record?.title} />
            <Title level={5}>{t("blog_posts.fields.content")}</Title>
            <MarkdownField value={record?.content} />
            <Title level={5}>{t("blog_posts.fields.category")}</Title>
            <TextField
                value={
                    categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        <>{categoryData?.data?.title}</>
                    )
                }
            />
            <Title level={5}>{t("blog_posts.fields.status.title")}</Title>
            <TextField value={record?.status} />
            <Title level={5}>{t("blog_posts.fields.createdAt")}</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
}
