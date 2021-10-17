import { tendermint } from '../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as liquidity from './module';

cosmosclient.codec.register('/tendermint.liquidity.v1beta1.MsgCreatePool', tendermint.liquidity.v1beta1.MsgCreatePool);
cosmosclient.codec.register('/tendermint.liquidity.v1beta1.MsgDepositWithinBatch', tendermint.liquidity.v1beta1.MsgDepositWithinBatch);
cosmosclient.codec.register('/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch', tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch);
cosmosclient.codec.register('/tendermint.liquidity.v1beta1.MsgSwapWithinBatch', tendermint.liquidity.v1beta1.MsgSwapWithinBatch);
