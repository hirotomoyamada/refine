import nock from "nock";

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
    encodedQueryParams: true,
})
    .get("/rest/v1/posts")
    .query({ select: "%2A", id: "in.%282%2C3%29" })
    .reply(
        200,
        [
            {
                id: 2,
                title: "test title",
                slug: "test-slug",
                createdAt: "2021-09-03T07:36:42+00:00",
                content: "test content",
                categoryId: 1,
                image: {},
            },
            {
                id: 3,
                title: "What a library",
                slug: "refine-nokta-kom",
                createdAt: "2021-09-03T09:17:51+00:00",
                content: "Hello lorem ipsum pala baba",
                categoryId: 1,
                image: {},
            },
        ],
        [
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "Date",
            "Mon, 06 Sep 2021 09:26:19 GMT",
            "Server",
            "postgrest/8.0.0",
            "Content-Range",
            "0-1/*",
            "Content-Location",
            "/posts?id=in.%282%2C3%29&select=%2A",
            "Content-Profile",
            "public",
            "vary",
            "Origin",
            "Access-Control-Allow-Origin",
            "*",
            "X-Kong-Upstream-Latency",
            "29",
            "X-Kong-Proxy-Latency",
            "0",
            "Via",
            "kong/2.2.1",
        ],
    );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
    encodedQueryParams: true,
})
    .get("/rest/v1/posts")
    .query({ select: "title", id: "in.%283%2C61%29" })
    .reply(
        200,
        [
            "1f8b08000000000000038bae562ac92cc94955b252324c2c4e0122a55a1d052e0584b04f7e516aae8267417169ae8291ae99526d2c0076408e3734000000",
        ],
        [
            "Date",
            "Fri, 28 Jan 2022 13:02:57 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "CF-Ray",
            "6d4a6b08d9755488-IST",
            "Access-Control-Allow-Origin",
            "*",
            "Content-Encoding",
            "gzip",
            "Content-Location",
            "/posts?id=in.%283%2C61%29&select=title",
            "Content-Range",
            "0-1/*",
            "Vary",
            "Accept-Encoding, Origin",
            "Via",
            "kong/2.2.1",
            "CF-Cache-Status",
            "DYNAMIC",
            "Content-Profile",
            "public",
            "Expect-CT",
            'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            "X-Kong-Proxy-Latency",
            "1",
            "X-Kong-Upstream-Latency",
            "3",
            "Server",
            "cloudflare",
            "alt-svc",
            'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
        ],
    );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
    encodedQueryParams: true,
})
    .get("/rest/v1/products")
    .query({ select: "%2A", id: "in.%281%2C2%29" })
    .reply(
        200,
        [
            "1f8b08000000000000038bae56ca4c51b232d451ca4bcc4d55b252f24d4c4ecacfcf560828ca4f0581c4e294c462a55a1d052e05885223b8d2cc808cfcbc54054353a5da5800a22a202948000000",
        ],
        [
            "Date",
            "Tue, 23 Jan 2024 12:53:54 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "Content-Range",
            "0-1/*",
            "CF-Ray",
            "84a02ea80ebcc1cd-BUD",
            "CF-Cache-Status",
            "DYNAMIC",
            "Access-Control-Allow-Origin",
            "*",
            "Content-Encoding",
            "gzip",
            "Content-Location",
            "/products?id=in.%281%2C2%29&select=%2A",
            "Strict-Transport-Security",
            "max-age=2592000; includeSubDomains",
            "Vary",
            "Accept-Encoding",
            "Via",
            "kong/2.8.1",
            "Content-Profile",
            "public",
            "sb-gateway-version",
            "1",
            "X-Kong-Proxy-Latency",
            "0",
            "X-Kong-Upstream-Latency",
            "27",
            "Server",
            "cloudflare",
            "alt-svc",
            'h3=":443"; ma=86400',
        ],
    );

nock("https://iwdfzvfqbtokqetmbmbp.supabase.co:443", {
    encodedQueryParams: true,
})
    .get("/rest/v1/products")
    .query({ select: "%2A", id: "in.%281%2C2%29" })
    .reply(
        406,
        {
            code: "PGRST106",
            details: null,
            hint: null,
            message: "The schema must be one of the following: public, storage",
        },
        [
            "Date",
            "Tue, 23 Jan 2024 12:53:55 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Transfer-Encoding",
            "chunked",
            "Connection",
            "close",
            "CF-Ray",
            "84a02eaa6e057340-BUD",
            "CF-Cache-Status",
            "DYNAMIC",
            "Access-Control-Allow-Origin",
            "*",
            "Strict-Transport-Security",
            "max-age=2592000; includeSubDomains",
            "Via",
            "kong/2.8.1",
            "sb-gateway-version",
            "1",
            "X-Kong-Proxy-Latency",
            "0",
            "X-Kong-Upstream-Latency",
            "1",
            "Vary",
            "Accept-Encoding",
            "Server",
            "cloudflare",
            "alt-svc",
            'h3=":443"; ma=86400',
        ],
    );
