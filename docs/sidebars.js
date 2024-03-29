/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "get_started" }],
      link: {
        type: 'doc',
        id: "get_started/introduction"
      },
    },
    {
      type: "category",
      label: "Use cases",
      link: { type: "doc", id: "use_cases/question_answering/index" },
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Q&A with RAG",
          collapsed: true,
          items: [
            "use_cases/question_answering/quickstart",
            "use_cases/question_answering/chat_history",
            "use_cases/question_answering/streaming",
            "use_cases/question_answering/sources",
            "use_cases/question_answering/citations",
            {
              type: "category",
              label: "More",
              collapsed: true,
              items: [
                "use_cases/question_answering/per_user",
                "use_cases/question_answering/conversational_retrieval_agents",
                "use_cases/question_answering/local_retrieval_qa",
              ]
            },
          ],
        },
        { type: "category", label: "Query analysis", collapsed: true, items: [{ type: "autogenerated", dirName: "use_cases/query_analysis" }], link: { type: "doc", id: "use_cases/query_analysis/index" } },
        { type: "category", label: "Chatbots", collapsed: true, items: [{ type: "autogenerated", dirName: "use_cases/chatbots" }], link: { type: "doc", id: "use_cases/chatbots/index" } },
        {
          type: "category",
          label: "Extraction",
          link: { type: "doc", id: "use_cases/extraction/index" },
          collapsed: true,
          items: [
            "use_cases/extraction/quickstart",
            "use_cases/extraction/guidelines",
            "use_cases/extraction/how_to/examples",
            {
              type: "category",
              label: "More",
              collapsed: true,
              items: [
                "use_cases/extraction/how_to/handle_long_text",
                "use_cases/extraction/how_to/handle_files",
                "use_cases/extraction/how_to/parse",
              ]
            },
          ]
        },
        { type: "category", label: "Tool use", collapsed: true, items: [{ type: "autogenerated", dirName: "use_cases/tool_use" }], link: { type: "doc", id: "use_cases/tool_use/index" } },
        { type: "category", label: "Q&A over SQL/CSV files", collapsed: true, items: [{ type: "autogenerated", dirName: "use_cases/sql" }], link: { type: "doc", id: "use_cases/sql/index" } },
        {
          type: "category",
          label: "More",
          collapsed: true,
          items: [
            // "use_cases/apis",
            "use_cases/code_understanding",
            "use_cases/csv",
            "use_cases/data_generation",
            { type: "category", label: "Graphs", collapsed: true, items: [{ type: "autogenerated", dirName: "use_cases/graph", }], link: { type: "doc", id: "use_cases/graph/index" } },
            "use_cases/summarization",
            "use_cases/tagging",
            "use_cases/web_scraping"
          ]
        }
      ],
      link: { type: 'generated-index', slug: "use_cases"}
    },
    {
      type: "category",
      label: "Expression Language",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "expression_language" } ],
      link: {
        type: 'doc',
        id: "expression_language/index"
      },
    },
    {
      type: "category",
      label: "Ecosystem",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "category",
          label: "🦜🛠️ LangSmith",
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "langsmith" } ],
          link: {
            type: 'doc',
            id: "langsmith/index"
          },
        },
        "langgraph",
        "langserve",
      ]
    },
    "security"
  ],
  components: [
    {
      type: "category",
      label: "Model I/O",
      collapsed: false,
      collapsible: false,
      link: { type: "doc", id: "modules/model_io/index" },
      items: [
        {
          type: "category",
          label: "Prompts",
          items: [{ type: "autogenerated", dirName: "modules/model_io/prompts" }],
          link: { type: "doc", id: "modules/model_io/prompts/index" }
        },
        {
          type: "category",
          label: "Chat models",
          items: [{ type: "autogenerated", dirName: "modules/model_io/chat" }],
          link: { type: "doc", id: "modules/model_io/chat/index" }
        },
        {
          type: "category",
          label: "LLMs",
          items: [{ type: "autogenerated", dirName: "modules/model_io/llms" }],
          link: { type: "doc", id: "modules/model_io/llms/index" }
        },
        {
          type: "category",
          label: "Output parsers",
          items: [{ type: "autogenerated", dirName: "modules/model_io/output_parsers" }],
          link: { type: "doc", id: "modules/model_io/output_parsers/index" }
        },
      ],
    },
    {
      type: "category",
      label: "Data connection",
      collapsed: false,
      collapsible: false,
      link: { type: "doc", id: "modules/data_connection/index" },
      items: [
        {
          type: "category",
          label: "Document loaders",
          items: [{ type: "autogenerated", dirName: "modules/data_connection/document_loaders" }],
          link: { type: "doc", id: "modules/data_connection/document_loaders/index" }
        },
        {
          type: "category",
          label: "Text splitters",
          items: [{ type: "autogenerated", dirName: "modules/data_connection/document_transformers" }],
          link: { type: "doc", id: "modules/data_connection/document_transformers/index" }
        },
        {
          type: "category",
          label: "Embedding models",
          items: [{ type: "autogenerated", dirName: "modules/data_connection/text_embedding" }],
          link: { type: "doc", id: "modules/data_connection/text_embedding/index" }
        },
        "modules/data_connection/vectorstores/index",
        {
          type: "category",
          label: "Retrievers",
          items: [{ type: "autogenerated", dirName: "modules/data_connection/retrievers" }],
          link: { type: "doc", id: "modules/data_connection/retrievers/index" }
        },
        "modules/data_connection/indexing"
      ],
    },
    {
      type: "category",
      label: "Composed",
      collapsed: false,
      collapsible: false,
      items: [
        { type: "category", label: "Agents", collapsed: true, items: [{type:"autogenerated", dirName: "modules/agents" }], link: { type: 'doc', id: "modules/agents/index" }},
        "modules/chains"
      ]
    },
    {
      type: "category",
      label: "More",
      collapsed: true,
      items: [
        { type: "category", label: "Memory", collapsed: true, items: [{type:"autogenerated", dirName: "modules/memory" }], link: { type: 'doc', id: "modules/memory/index" }},
        { type: "category", label: "Callbacks", collapsed: true, items: [{type:"autogenerated", dirName: "modules/callbacks" }], link: { type: 'doc', id: "modules/callbacks/index" }},
      ]
    },
    { type: "doc", id: "modules/index", className: "hidden" },
  ],
  integrations: [
    {
      type: "category",
      label: "Providers",
      collapsible: false,
      items: [
        { type: "autogenerated", dirName: "integrations/platforms" },
        { type: "category", label: "More", collapsed: true, items: [{type:"autogenerated", dirName: "integrations/providers" }], link: { type: 'generated-index', slug: "integrations/providers", }},
      ],
      link: {
        type: 'doc',
        id: 'integrations/platforms/index'
      },
    },
    {
      type: "category",
      label: "Components",
      collapsible: false,
      items: [
        { type: "category", label: "LLMs", collapsed: true, items: [{type:"autogenerated", dirName: "integrations/llms" }], link: { type: 'doc', id: "integrations/llms/index"}},
        { type: "category", label: "Chat models", collapsed: true, items: [{type:"autogenerated", dirName: "integrations/chat" }], link: { type: 'doc', id: "integrations/chat/index"}},
        { type: "category", label: "Embedding models", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/text_embedding" }], link: {type: "generated-index", slug: "integrations/text_embedding" }},
        { type: "category", label: "Document loaders", collapsed: true, items: [{type:"autogenerated", dirName: "integrations/document_loaders" }], link: {type: "generated-index", slug: "integrations/document_loaders" }},
        { type: "category", label: "Document transformers", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/document_transformers" }], link: {type: "generated-index", slug: "integrations/document_transformers" }},
        { type: "category", label: "Vector stores", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/vectorstores" }], link: {type: "generated-index", slug: "integrations/vectorstores" }},
        { type: "category", label: "Retrievers", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/retrievers" }], link: {type: "generated-index", slug: "integrations/retrievers" }},
        { type: "category", label: "Tools", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/tools" }], link: {type: "generated-index", slug: "integrations/tools" }},
        { type: "category", label: "Toolkits", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/toolkits" }], link: {type: "generated-index", slug: "integrations/toolkits" }},
        { type: "category", label: "Memory", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/memory" }], link: {type: "generated-index", slug: "integrations/memory" }},
        { type: "category", label: "Callbacks", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/callbacks" }], link: {type: "generated-index", slug: "integrations/callbacks" }},
        { type: "category", label: "Chat loaders", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/chat_loaders" }], link: {type: "generated-index", slug: "integrations/chat_loaders" }},
        { type: "category", label: "Adapters", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/adapters" }], link: {type: "generated-index", slug: "integrations/adapters" }},
        { type: "category", label: "Stores", collapsed: true, items: [{type: "autogenerated", dirName: "integrations/stores" }], link: {type: "doc", id: "integrations/stores/index" }},
      ],
      link: {
        type: 'generated-index',
        slug: "integrations/components",
      },
    },
  ],
  guides: [
    { type: "category", label: "Productionization", collapsible: false, items: [{type: "autogenerated", dirName: "guides/productionization" }] },
    { type: "doc", label: "Local models", id: "guides/local_llms"},
    { type: "category", label: "Miscellaneous", collapsible: false, items: [{type: "autogenerated", dirName: "guides/miscellaneous" }] },
    { type: "doc", id: "guides/index", className: "hidden" },
  ],
  templates: [
    {
      type: "category",
      label: "Templates",
      items: [
        { type: "autogenerated", dirName: "templates" },
      ],
      link: { type: 'doc', id: "templates/index" }
    },
  ],
  contributing: [
    { type: "category", label: "Contributing", items: [{type: "autogenerated", dirName: "contributing" }] }
  ],
};
