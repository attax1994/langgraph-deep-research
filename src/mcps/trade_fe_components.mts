import { MultiServerMCPClient } from "@langchain/mcp-adapters"

export const MCPTradeFEComponents = new MultiServerMCPClient({
    mcpServers: {
        "trade-fe-components": {
            command: "npx",
            args: [
                "--registry",
                "https://bnpm.byted.org",
                "-y",
                "@byted/mcp-proxy@latest"
            ],
            env: {
                MCP_SERVER_PSM: "life.trade.platform_bff",
                MCP_GATEWAY_REGION: "CN"
            }
        }
    }
})

export const MCPTradeFEComponentsTools = await MCPTradeFEComponents.getTools()