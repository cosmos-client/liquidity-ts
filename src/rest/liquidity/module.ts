import { QueryApi } from '../../openapi/api';
import { cosmosclient } from '@cosmos-client/core';

export function liquidityPools(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).liquidityPools(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function liquidityPool(sdk: cosmosclient.CosmosSDK, poolId: string) {
  return new QueryApi(undefined, sdk.url).liquidityPool(poolId);
}

export function liquidityPoolByPoolCoinDenom(sdk: cosmosclient.CosmosSDK, poolCoinDenom: string) {
  return new QueryApi(undefined, sdk.url).liquidityPoolByPoolCoinDenom(poolCoinDenom);
}

export function liquidityPoolByReserveAcc(sdk: cosmosclient.CosmosSDK, reserveAcc: string) {
  return new QueryApi(undefined, sdk.url).liquidityPoolByReserveAcc(reserveAcc);
}

export function liquidityPoolBatch(sdk: cosmosclient.CosmosSDK, poolId: string) {
  return new QueryApi(undefined, sdk.url).liquidityPoolBatch(poolId);
}

export function poolBatchSwapMsgs(
  sdk: cosmosclient.CosmosSDK,
  poolId: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).poolBatchSwapMsgs(
    poolId,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function poolBatchSwapMsg(sdk: cosmosclient.CosmosSDK, poolId: string, msgIndex: string) {
  return new QueryApi(undefined, sdk.url).poolBatchSwapMsg(poolId, msgIndex);
}

export function poolBatchDepositMsgs(
  sdk: cosmosclient.CosmosSDK,
  poolId: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).poolBatchDepositMsgs(
    poolId,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function poolBatchDepositMsg(sdk: cosmosclient.CosmosSDK, poolId: string, msgIndex: string) {
  return new QueryApi(undefined, sdk.url).poolBatchDepositMsg(poolId, msgIndex);
}

export function poolBatchWithdrawMsgs(
  sdk: cosmosclient.CosmosSDK,
  poolId: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).poolBatchWithdrawMsgs(
    poolId,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function poolBatchWithdrawMsg(sdk: cosmosclient.CosmosSDK, poolId: string, msgIndex: string) {
  return new QueryApi(undefined, sdk.url).poolBatchWithdrawMsg(poolId, msgIndex);
}

export function liquidityQueries(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).liquidityQueries();
}
