import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function ping(
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> {
  console.log("ping event", event);
  console.log("ping");

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      success: true,
      message: "pong",
    }),
  };
}
