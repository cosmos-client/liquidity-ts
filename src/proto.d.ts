import * as $protobuf from "protobufjs";
/** Namespace tendermint. */
export namespace tendermint {

    /** Namespace liquidity. */
    namespace liquidity {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a QueryLiquidityPoolRequest. */
            interface IQueryLiquidityPoolRequest {

                /** QueryLiquidityPoolRequest pool_id */
                pool_id?: (Long|null);
            }

            /** Represents a QueryLiquidityPoolRequest. */
            class QueryLiquidityPoolRequest implements IQueryLiquidityPoolRequest {

                /**
                 * Constructs a new QueryLiquidityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolRequest);

                /** QueryLiquidityPoolRequest pool_id. */
                public pool_id: Long;

                /**
                 * Encodes the specified QueryLiquidityPoolRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest;

                /**
                 * Decodes a QueryLiquidityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest;

                /**
                 * Verifies a QueryLiquidityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest;

                /**
                 * Creates a plain object from a QueryLiquidityPoolRequest message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolResponse. */
            interface IQueryLiquidityPoolResponse {

                /** QueryLiquidityPoolResponse pool */
                pool?: (tendermint.liquidity.v1beta1.IPool|null);
            }

            /** Represents a QueryLiquidityPoolResponse. */
            class QueryLiquidityPoolResponse implements IQueryLiquidityPoolResponse {

                /**
                 * Constructs a new QueryLiquidityPoolResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolResponse);

                /** QueryLiquidityPoolResponse pool. */
                public pool?: (tendermint.liquidity.v1beta1.IPool|null);

                /**
                 * Encodes the specified QueryLiquidityPoolResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse;

                /**
                 * Decodes a QueryLiquidityPoolResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse;

                /**
                 * Verifies a QueryLiquidityPoolResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse;

                /**
                 * Creates a plain object from a QueryLiquidityPoolResponse message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolByPoolCoinDenomRequest. */
            interface IQueryLiquidityPoolByPoolCoinDenomRequest {

                /** QueryLiquidityPoolByPoolCoinDenomRequest pool_coin_denom */
                pool_coin_denom?: (string|null);
            }

            /** Represents a QueryLiquidityPoolByPoolCoinDenomRequest. */
            class QueryLiquidityPoolByPoolCoinDenomRequest implements IQueryLiquidityPoolByPoolCoinDenomRequest {

                /**
                 * Constructs a new QueryLiquidityPoolByPoolCoinDenomRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByPoolCoinDenomRequest);

                /** QueryLiquidityPoolByPoolCoinDenomRequest pool_coin_denom. */
                public pool_coin_denom: string;

                /**
                 * Encodes the specified QueryLiquidityPoolByPoolCoinDenomRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolByPoolCoinDenomRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByPoolCoinDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolByPoolCoinDenomRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolByPoolCoinDenomRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByPoolCoinDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolByPoolCoinDenomRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolByPoolCoinDenomRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest;

                /**
                 * Decodes a QueryLiquidityPoolByPoolCoinDenomRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolByPoolCoinDenomRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest;

                /**
                 * Verifies a QueryLiquidityPoolByPoolCoinDenomRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolByPoolCoinDenomRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolByPoolCoinDenomRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest;

                /**
                 * Creates a plain object from a QueryLiquidityPoolByPoolCoinDenomRequest message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolByPoolCoinDenomRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolByPoolCoinDenomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolByPoolCoinDenomRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolByReserveAccRequest. */
            interface IQueryLiquidityPoolByReserveAccRequest {

                /** QueryLiquidityPoolByReserveAccRequest reserve_acc */
                reserve_acc?: (string|null);
            }

            /** Represents a QueryLiquidityPoolByReserveAccRequest. */
            class QueryLiquidityPoolByReserveAccRequest implements IQueryLiquidityPoolByReserveAccRequest {

                /**
                 * Constructs a new QueryLiquidityPoolByReserveAccRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByReserveAccRequest);

                /** QueryLiquidityPoolByReserveAccRequest reserve_acc. */
                public reserve_acc: string;

                /**
                 * Encodes the specified QueryLiquidityPoolByReserveAccRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolByReserveAccRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByReserveAccRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolByReserveAccRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolByReserveAccRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolByReserveAccRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolByReserveAccRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolByReserveAccRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest;

                /**
                 * Decodes a QueryLiquidityPoolByReserveAccRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolByReserveAccRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest;

                /**
                 * Verifies a QueryLiquidityPoolByReserveAccRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolByReserveAccRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolByReserveAccRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest;

                /**
                 * Creates a plain object from a QueryLiquidityPoolByReserveAccRequest message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolByReserveAccRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolByReserveAccRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolByReserveAccRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolBatchRequest. */
            interface IQueryLiquidityPoolBatchRequest {

                /** QueryLiquidityPoolBatchRequest pool_id */
                pool_id?: (Long|null);
            }

            /** Represents a QueryLiquidityPoolBatchRequest. */
            class QueryLiquidityPoolBatchRequest implements IQueryLiquidityPoolBatchRequest {

                /**
                 * Constructs a new QueryLiquidityPoolBatchRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchRequest);

                /** QueryLiquidityPoolBatchRequest pool_id. */
                public pool_id: Long;

                /**
                 * Encodes the specified QueryLiquidityPoolBatchRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolBatchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolBatchRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolBatchRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolBatchRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest;

                /**
                 * Decodes a QueryLiquidityPoolBatchRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolBatchRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest;

                /**
                 * Verifies a QueryLiquidityPoolBatchRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolBatchRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolBatchRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest;

                /**
                 * Creates a plain object from a QueryLiquidityPoolBatchRequest message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolBatchRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolBatchRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolBatchResponse. */
            interface IQueryLiquidityPoolBatchResponse {

                /** QueryLiquidityPoolBatchResponse batch */
                batch?: (tendermint.liquidity.v1beta1.IPoolBatch|null);
            }

            /** Represents a QueryLiquidityPoolBatchResponse. */
            class QueryLiquidityPoolBatchResponse implements IQueryLiquidityPoolBatchResponse {

                /**
                 * Constructs a new QueryLiquidityPoolBatchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchResponse);

                /** QueryLiquidityPoolBatchResponse batch. */
                public batch?: (tendermint.liquidity.v1beta1.IPoolBatch|null);

                /**
                 * Encodes the specified QueryLiquidityPoolBatchResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolBatchResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolBatchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse;

                /**
                 * Decodes a QueryLiquidityPoolBatchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse;

                /**
                 * Verifies a QueryLiquidityPoolBatchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolBatchResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse;

                /**
                 * Creates a plain object from a QueryLiquidityPoolBatchResponse message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolBatchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolBatchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolsRequest. */
            interface IQueryLiquidityPoolsRequest {

                /** QueryLiquidityPoolsRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryLiquidityPoolsRequest. */
            class QueryLiquidityPoolsRequest implements IQueryLiquidityPoolsRequest {

                /**
                 * Constructs a new QueryLiquidityPoolsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsRequest);

                /** QueryLiquidityPoolsRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryLiquidityPoolsRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolsRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest.verify|verify} messages.
                 * @param message QueryLiquidityPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest;

                /**
                 * Decodes a QueryLiquidityPoolsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest;

                /**
                 * Verifies a QueryLiquidityPoolsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolsRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest;

                /**
                 * Creates a plain object from a QueryLiquidityPoolsRequest message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryLiquidityPoolsResponse. */
            interface IQueryLiquidityPoolsResponse {

                /** QueryLiquidityPoolsResponse pools */
                pools?: (tendermint.liquidity.v1beta1.IPool[]|null);

                /** QueryLiquidityPoolsResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryLiquidityPoolsResponse. */
            class QueryLiquidityPoolsResponse implements IQueryLiquidityPoolsResponse {

                /**
                 * Constructs a new QueryLiquidityPoolsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsResponse);

                /** QueryLiquidityPoolsResponse pools. */
                public pools: tendermint.liquidity.v1beta1.IPool[];

                /** QueryLiquidityPoolsResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryLiquidityPoolsResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryLiquidityPoolsResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse.verify|verify} messages.
                 * @param message QueryLiquidityPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryLiquidityPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryLiquidityPoolsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryLiquidityPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse;

                /**
                 * Decodes a QueryLiquidityPoolsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryLiquidityPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse;

                /**
                 * Verifies a QueryLiquidityPoolsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryLiquidityPoolsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryLiquidityPoolsResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse;

                /**
                 * Creates a plain object from a QueryLiquidityPoolsResponse message. Also converts values to other types if specified.
                 * @param message QueryLiquidityPoolsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryLiquidityPoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryLiquidityPoolsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryParamsRequest. */
            interface IQueryParamsRequest {
            }

            /** Represents a QueryParamsRequest. */
            class QueryParamsRequest implements IQueryParamsRequest {

                /**
                 * Constructs a new QueryParamsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryParamsRequest);

                /**
                 * Encodes the specified QueryParamsRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryParamsRequest.verify|verify} messages.
                 * @param message QueryParamsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryParamsRequest.verify|verify} messages.
                 * @param message QueryParamsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryParamsRequest;

                /**
                 * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryParamsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryParamsRequest;

                /**
                 * Verifies a QueryParamsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryParamsRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryParamsRequest;

                /**
                 * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
                 * @param message QueryParamsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryParamsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryParamsResponse. */
            interface IQueryParamsResponse {

                /** QueryParamsResponse params */
                params?: (tendermint.liquidity.v1beta1.IParams|null);
            }

            /** Represents a QueryParamsResponse. */
            class QueryParamsResponse implements IQueryParamsResponse {

                /**
                 * Constructs a new QueryParamsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryParamsResponse);

                /** QueryParamsResponse params. */
                public params?: (tendermint.liquidity.v1beta1.IParams|null);

                /**
                 * Encodes the specified QueryParamsResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryParamsResponse.verify|verify} messages.
                 * @param message QueryParamsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryParamsResponse.verify|verify} messages.
                 * @param message QueryParamsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryParamsResponse;

                /**
                 * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryParamsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryParamsResponse;

                /**
                 * Verifies a QueryParamsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryParamsResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryParamsResponse;

                /**
                 * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
                 * @param message QueryParamsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryParamsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchSwapMsgsRequest. */
            interface IQueryPoolBatchSwapMsgsRequest {

                /** QueryPoolBatchSwapMsgsRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchSwapMsgsRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryPoolBatchSwapMsgsRequest. */
            class QueryPoolBatchSwapMsgsRequest implements IQueryPoolBatchSwapMsgsRequest {

                /**
                 * Constructs a new QueryPoolBatchSwapMsgsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsRequest);

                /** QueryPoolBatchSwapMsgsRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchSwapMsgsRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgsRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgsRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchSwapMsgsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchSwapMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest;

                /**
                 * Decodes a QueryPoolBatchSwapMsgsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchSwapMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest;

                /**
                 * Verifies a QueryPoolBatchSwapMsgsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchSwapMsgsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchSwapMsgsRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchSwapMsgsRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchSwapMsgsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchSwapMsgsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchSwapMsgRequest. */
            interface IQueryPoolBatchSwapMsgRequest {

                /** QueryPoolBatchSwapMsgRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchSwapMsgRequest msg_index */
                msg_index?: (Long|null);
            }

            /** Represents a QueryPoolBatchSwapMsgRequest. */
            class QueryPoolBatchSwapMsgRequest implements IQueryPoolBatchSwapMsgRequest {

                /**
                 * Constructs a new QueryPoolBatchSwapMsgRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgRequest);

                /** QueryPoolBatchSwapMsgRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchSwapMsgRequest msg_index. */
                public msg_index: Long;

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchSwapMsgRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchSwapMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest;

                /**
                 * Decodes a QueryPoolBatchSwapMsgRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchSwapMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest;

                /**
                 * Verifies a QueryPoolBatchSwapMsgRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchSwapMsgRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchSwapMsgRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchSwapMsgRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchSwapMsgRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchSwapMsgRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchSwapMsgsResponse. */
            interface IQueryPoolBatchSwapMsgsResponse {

                /** QueryPoolBatchSwapMsgsResponse swaps */
                swaps?: (tendermint.liquidity.v1beta1.ISwapMsgState[]|null);

                /** QueryPoolBatchSwapMsgsResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryPoolBatchSwapMsgsResponse. */
            class QueryPoolBatchSwapMsgsResponse implements IQueryPoolBatchSwapMsgsResponse {

                /**
                 * Constructs a new QueryPoolBatchSwapMsgsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsResponse);

                /** QueryPoolBatchSwapMsgsResponse swaps. */
                public swaps: tendermint.liquidity.v1beta1.ISwapMsgState[];

                /** QueryPoolBatchSwapMsgsResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgsResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgsResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchSwapMsgsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchSwapMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse;

                /**
                 * Decodes a QueryPoolBatchSwapMsgsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchSwapMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse;

                /**
                 * Verifies a QueryPoolBatchSwapMsgsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchSwapMsgsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchSwapMsgsResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchSwapMsgsResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchSwapMsgsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchSwapMsgsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchSwapMsgResponse. */
            interface IQueryPoolBatchSwapMsgResponse {

                /** QueryPoolBatchSwapMsgResponse swap */
                swap?: (tendermint.liquidity.v1beta1.ISwapMsgState|null);
            }

            /** Represents a QueryPoolBatchSwapMsgResponse. */
            class QueryPoolBatchSwapMsgResponse implements IQueryPoolBatchSwapMsgResponse {

                /**
                 * Constructs a new QueryPoolBatchSwapMsgResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgResponse);

                /** QueryPoolBatchSwapMsgResponse swap. */
                public swap?: (tendermint.liquidity.v1beta1.ISwapMsgState|null);

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchSwapMsgResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchSwapMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchSwapMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchSwapMsgResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchSwapMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse;

                /**
                 * Decodes a QueryPoolBatchSwapMsgResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchSwapMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse;

                /**
                 * Verifies a QueryPoolBatchSwapMsgResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchSwapMsgResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchSwapMsgResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchSwapMsgResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchSwapMsgResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchSwapMsgResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchSwapMsgResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchDepositMsgsRequest. */
            interface IQueryPoolBatchDepositMsgsRequest {

                /** QueryPoolBatchDepositMsgsRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchDepositMsgsRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryPoolBatchDepositMsgsRequest. */
            class QueryPoolBatchDepositMsgsRequest implements IQueryPoolBatchDepositMsgsRequest {

                /**
                 * Constructs a new QueryPoolBatchDepositMsgsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsRequest);

                /** QueryPoolBatchDepositMsgsRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchDepositMsgsRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgsRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgsRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchDepositMsgsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchDepositMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest;

                /**
                 * Decodes a QueryPoolBatchDepositMsgsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchDepositMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest;

                /**
                 * Verifies a QueryPoolBatchDepositMsgsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchDepositMsgsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchDepositMsgsRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchDepositMsgsRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchDepositMsgsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchDepositMsgsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchDepositMsgRequest. */
            interface IQueryPoolBatchDepositMsgRequest {

                /** QueryPoolBatchDepositMsgRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchDepositMsgRequest msg_index */
                msg_index?: (Long|null);
            }

            /** Represents a QueryPoolBatchDepositMsgRequest. */
            class QueryPoolBatchDepositMsgRequest implements IQueryPoolBatchDepositMsgRequest {

                /**
                 * Constructs a new QueryPoolBatchDepositMsgRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgRequest);

                /** QueryPoolBatchDepositMsgRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchDepositMsgRequest msg_index. */
                public msg_index: Long;

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchDepositMsgRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchDepositMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest;

                /**
                 * Decodes a QueryPoolBatchDepositMsgRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchDepositMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest;

                /**
                 * Verifies a QueryPoolBatchDepositMsgRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchDepositMsgRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchDepositMsgRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchDepositMsgRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchDepositMsgRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchDepositMsgRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchDepositMsgsResponse. */
            interface IQueryPoolBatchDepositMsgsResponse {

                /** QueryPoolBatchDepositMsgsResponse deposits */
                deposits?: (tendermint.liquidity.v1beta1.IDepositMsgState[]|null);

                /** QueryPoolBatchDepositMsgsResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryPoolBatchDepositMsgsResponse. */
            class QueryPoolBatchDepositMsgsResponse implements IQueryPoolBatchDepositMsgsResponse {

                /**
                 * Constructs a new QueryPoolBatchDepositMsgsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsResponse);

                /** QueryPoolBatchDepositMsgsResponse deposits. */
                public deposits: tendermint.liquidity.v1beta1.IDepositMsgState[];

                /** QueryPoolBatchDepositMsgsResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgsResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgsResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchDepositMsgsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchDepositMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse;

                /**
                 * Decodes a QueryPoolBatchDepositMsgsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchDepositMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse;

                /**
                 * Verifies a QueryPoolBatchDepositMsgsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchDepositMsgsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchDepositMsgsResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchDepositMsgsResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchDepositMsgsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchDepositMsgsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchDepositMsgResponse. */
            interface IQueryPoolBatchDepositMsgResponse {

                /** QueryPoolBatchDepositMsgResponse deposit */
                deposit?: (tendermint.liquidity.v1beta1.IDepositMsgState|null);
            }

            /** Represents a QueryPoolBatchDepositMsgResponse. */
            class QueryPoolBatchDepositMsgResponse implements IQueryPoolBatchDepositMsgResponse {

                /**
                 * Constructs a new QueryPoolBatchDepositMsgResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgResponse);

                /** QueryPoolBatchDepositMsgResponse deposit. */
                public deposit?: (tendermint.liquidity.v1beta1.IDepositMsgState|null);

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchDepositMsgResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchDepositMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchDepositMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchDepositMsgResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchDepositMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse;

                /**
                 * Decodes a QueryPoolBatchDepositMsgResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchDepositMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse;

                /**
                 * Verifies a QueryPoolBatchDepositMsgResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchDepositMsgResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchDepositMsgResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchDepositMsgResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchDepositMsgResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchDepositMsgResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchDepositMsgResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchWithdrawMsgsRequest. */
            interface IQueryPoolBatchWithdrawMsgsRequest {

                /** QueryPoolBatchWithdrawMsgsRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchWithdrawMsgsRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryPoolBatchWithdrawMsgsRequest. */
            class QueryPoolBatchWithdrawMsgsRequest implements IQueryPoolBatchWithdrawMsgsRequest {

                /**
                 * Constructs a new QueryPoolBatchWithdrawMsgsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsRequest);

                /** QueryPoolBatchWithdrawMsgsRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchWithdrawMsgsRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgsRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgsRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchWithdrawMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchWithdrawMsgsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest;

                /**
                 * Verifies a QueryPoolBatchWithdrawMsgsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchWithdrawMsgsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchWithdrawMsgsRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchWithdrawMsgsRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchWithdrawMsgsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchWithdrawMsgsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchWithdrawMsgRequest. */
            interface IQueryPoolBatchWithdrawMsgRequest {

                /** QueryPoolBatchWithdrawMsgRequest pool_id */
                pool_id?: (Long|null);

                /** QueryPoolBatchWithdrawMsgRequest msg_index */
                msg_index?: (Long|null);
            }

            /** Represents a QueryPoolBatchWithdrawMsgRequest. */
            class QueryPoolBatchWithdrawMsgRequest implements IQueryPoolBatchWithdrawMsgRequest {

                /**
                 * Constructs a new QueryPoolBatchWithdrawMsgRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgRequest);

                /** QueryPoolBatchWithdrawMsgRequest pool_id. */
                public pool_id: Long;

                /** QueryPoolBatchWithdrawMsgRequest msg_index. */
                public msg_index: Long;

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgRequest message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgRequest message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchWithdrawMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchWithdrawMsgRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest;

                /**
                 * Verifies a QueryPoolBatchWithdrawMsgRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchWithdrawMsgRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchWithdrawMsgRequest
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest;

                /**
                 * Creates a plain object from a QueryPoolBatchWithdrawMsgRequest message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchWithdrawMsgRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchWithdrawMsgRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchWithdrawMsgsResponse. */
            interface IQueryPoolBatchWithdrawMsgsResponse {

                /** QueryPoolBatchWithdrawMsgsResponse withdraws */
                withdraws?: (tendermint.liquidity.v1beta1.IWithdrawMsgState[]|null);

                /** QueryPoolBatchWithdrawMsgsResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryPoolBatchWithdrawMsgsResponse. */
            class QueryPoolBatchWithdrawMsgsResponse implements IQueryPoolBatchWithdrawMsgsResponse {

                /**
                 * Constructs a new QueryPoolBatchWithdrawMsgsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsResponse);

                /** QueryPoolBatchWithdrawMsgsResponse withdraws. */
                public withdraws: tendermint.liquidity.v1beta1.IWithdrawMsgState[];

                /** QueryPoolBatchWithdrawMsgsResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgsResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgsResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchWithdrawMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchWithdrawMsgsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse;

                /**
                 * Verifies a QueryPoolBatchWithdrawMsgsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchWithdrawMsgsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchWithdrawMsgsResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchWithdrawMsgsResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchWithdrawMsgsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchWithdrawMsgsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPoolBatchWithdrawMsgResponse. */
            interface IQueryPoolBatchWithdrawMsgResponse {

                /** QueryPoolBatchWithdrawMsgResponse withdraw */
                withdraw?: (tendermint.liquidity.v1beta1.IWithdrawMsgState|null);
            }

            /** Represents a QueryPoolBatchWithdrawMsgResponse. */
            class QueryPoolBatchWithdrawMsgResponse implements IQueryPoolBatchWithdrawMsgResponse {

                /**
                 * Constructs a new QueryPoolBatchWithdrawMsgResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgResponse);

                /** QueryPoolBatchWithdrawMsgResponse withdraw. */
                public withdraw?: (tendermint.liquidity.v1beta1.IWithdrawMsgState|null);

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPoolBatchWithdrawMsgResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse.verify|verify} messages.
                 * @param message QueryPoolBatchWithdrawMsgResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IQueryPoolBatchWithdrawMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPoolBatchWithdrawMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse;

                /**
                 * Decodes a QueryPoolBatchWithdrawMsgResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPoolBatchWithdrawMsgResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse;

                /**
                 * Verifies a QueryPoolBatchWithdrawMsgResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPoolBatchWithdrawMsgResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPoolBatchWithdrawMsgResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse;

                /**
                 * Creates a plain object from a QueryPoolBatchWithdrawMsgResponse message. Also converts values to other types if specified.
                 * @param message QueryPoolBatchWithdrawMsgResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.QueryPoolBatchWithdrawMsgResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPoolBatchWithdrawMsgResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PoolType. */
            interface IPoolType {

                /** PoolType id */
                id?: (number|null);

                /** PoolType name */
                name?: (string|null);

                /** PoolType min_reserve_coin_num */
                min_reserve_coin_num?: (number|null);

                /** PoolType max_reserve_coin_num */
                max_reserve_coin_num?: (number|null);

                /** PoolType description */
                description?: (string|null);
            }

            /** Represents a PoolType. */
            class PoolType implements IPoolType {

                /**
                 * Constructs a new PoolType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IPoolType);

                /** PoolType id. */
                public id: number;

                /** PoolType name. */
                public name: string;

                /** PoolType min_reserve_coin_num. */
                public min_reserve_coin_num: number;

                /** PoolType max_reserve_coin_num. */
                public max_reserve_coin_num: number;

                /** PoolType description. */
                public description: string;

                /**
                 * Encodes the specified PoolType message. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolType.verify|verify} messages.
                 * @param message PoolType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IPoolType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PoolType message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolType.verify|verify} messages.
                 * @param message PoolType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IPoolType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PoolType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PoolType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.PoolType;

                /**
                 * Decodes a PoolType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PoolType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.PoolType;

                /**
                 * Verifies a PoolType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PoolType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PoolType
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.PoolType;

                /**
                 * Creates a plain object from a PoolType message. Also converts values to other types if specified.
                 * @param message PoolType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.PoolType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PoolType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Params. */
            interface IParams {

                /** Params pool_types */
                pool_types?: (tendermint.liquidity.v1beta1.IPoolType[]|null);

                /** Params min_init_deposit_amount */
                min_init_deposit_amount?: (string|null);

                /** Params init_pool_coin_mint_amount */
                init_pool_coin_mint_amount?: (string|null);

                /** Params max_reserve_coin_amount */
                max_reserve_coin_amount?: (string|null);

                /** Params pool_creation_fee */
                pool_creation_fee?: (cosmos.base.v1beta1.ICoin[]|null);

                /** Params swap_fee_rate */
                swap_fee_rate?: (string|null);

                /** Params withdraw_fee_rate */
                withdraw_fee_rate?: (string|null);

                /** Params max_order_amount_ratio */
                max_order_amount_ratio?: (string|null);

                /** Params unit_batch_height */
                unit_batch_height?: (number|null);

                /** Params circuit_breaker_enabled */
                circuit_breaker_enabled?: (boolean|null);
            }

            /** Represents a Params. */
            class Params implements IParams {

                /**
                 * Constructs a new Params.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IParams);

                /** Params pool_types. */
                public pool_types: tendermint.liquidity.v1beta1.IPoolType[];

                /** Params min_init_deposit_amount. */
                public min_init_deposit_amount: string;

                /** Params init_pool_coin_mint_amount. */
                public init_pool_coin_mint_amount: string;

                /** Params max_reserve_coin_amount. */
                public max_reserve_coin_amount: string;

                /** Params pool_creation_fee. */
                public pool_creation_fee: cosmos.base.v1beta1.ICoin[];

                /** Params swap_fee_rate. */
                public swap_fee_rate: string;

                /** Params withdraw_fee_rate. */
                public withdraw_fee_rate: string;

                /** Params max_order_amount_ratio. */
                public max_order_amount_ratio: string;

                /** Params unit_batch_height. */
                public unit_batch_height: number;

                /** Params circuit_breaker_enabled. */
                public circuit_breaker_enabled: boolean;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link tendermint.liquidity.v1beta1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Params message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.Params;

                /**
                 * Decodes a Params message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.Params;

                /**
                 * Verifies a Params message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Params message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Params
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.Params;

                /**
                 * Creates a plain object from a Params message. Also converts values to other types if specified.
                 * @param message Params
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Params to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Pool. */
            interface IPool {

                /** Pool id */
                id?: (Long|null);

                /** Pool type_id */
                type_id?: (number|null);

                /** Pool reserve_coin_denoms */
                reserve_coin_denoms?: (string[]|null);

                /** Pool reserve_account_address */
                reserve_account_address?: (string|null);

                /** Pool pool_coin_denom */
                pool_coin_denom?: (string|null);
            }

            /** Represents a Pool. */
            class Pool implements IPool {

                /**
                 * Constructs a new Pool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IPool);

                /** Pool id. */
                public id: Long;

                /** Pool type_id. */
                public type_id: number;

                /** Pool reserve_coin_denoms. */
                public reserve_coin_denoms: string[];

                /** Pool reserve_account_address. */
                public reserve_account_address: string;

                /** Pool pool_coin_denom. */
                public pool_coin_denom: string;

                /**
                 * Encodes the specified Pool message. Does not implicitly {@link tendermint.liquidity.v1beta1.Pool.verify|verify} messages.
                 * @param message Pool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Pool message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.Pool.verify|verify} messages.
                 * @param message Pool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Pool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Pool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.Pool;

                /**
                 * Decodes a Pool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Pool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.Pool;

                /**
                 * Verifies a Pool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Pool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Pool
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.Pool;

                /**
                 * Creates a plain object from a Pool message. Also converts values to other types if specified.
                 * @param message Pool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.Pool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Pool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PoolMetadata. */
            interface IPoolMetadata {

                /** PoolMetadata pool_id */
                pool_id?: (Long|null);

                /** PoolMetadata pool_coin_total_supply */
                pool_coin_total_supply?: (cosmos.base.v1beta1.ICoin|null);

                /** PoolMetadata reserve_coins */
                reserve_coins?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a PoolMetadata. */
            class PoolMetadata implements IPoolMetadata {

                /**
                 * Constructs a new PoolMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IPoolMetadata);

                /** PoolMetadata pool_id. */
                public pool_id: Long;

                /** PoolMetadata pool_coin_total_supply. */
                public pool_coin_total_supply?: (cosmos.base.v1beta1.ICoin|null);

                /** PoolMetadata reserve_coins. */
                public reserve_coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified PoolMetadata message. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolMetadata.verify|verify} messages.
                 * @param message PoolMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IPoolMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PoolMetadata message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolMetadata.verify|verify} messages.
                 * @param message PoolMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IPoolMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PoolMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PoolMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.PoolMetadata;

                /**
                 * Decodes a PoolMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PoolMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.PoolMetadata;

                /**
                 * Verifies a PoolMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PoolMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PoolMetadata
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.PoolMetadata;

                /**
                 * Creates a plain object from a PoolMetadata message. Also converts values to other types if specified.
                 * @param message PoolMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.PoolMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PoolMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PoolBatch. */
            interface IPoolBatch {

                /** PoolBatch pool_id */
                pool_id?: (Long|null);

                /** PoolBatch index */
                index?: (Long|null);

                /** PoolBatch begin_height */
                begin_height?: (Long|null);

                /** PoolBatch deposit_msg_index */
                deposit_msg_index?: (Long|null);

                /** PoolBatch withdraw_msg_index */
                withdraw_msg_index?: (Long|null);

                /** PoolBatch swap_msg_index */
                swap_msg_index?: (Long|null);

                /** PoolBatch executed */
                executed?: (boolean|null);
            }

            /** Represents a PoolBatch. */
            class PoolBatch implements IPoolBatch {

                /**
                 * Constructs a new PoolBatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IPoolBatch);

                /** PoolBatch pool_id. */
                public pool_id: Long;

                /** PoolBatch index. */
                public index: Long;

                /** PoolBatch begin_height. */
                public begin_height: Long;

                /** PoolBatch deposit_msg_index. */
                public deposit_msg_index: Long;

                /** PoolBatch withdraw_msg_index. */
                public withdraw_msg_index: Long;

                /** PoolBatch swap_msg_index. */
                public swap_msg_index: Long;

                /** PoolBatch executed. */
                public executed: boolean;

                /**
                 * Encodes the specified PoolBatch message. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolBatch.verify|verify} messages.
                 * @param message PoolBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IPoolBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PoolBatch message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolBatch.verify|verify} messages.
                 * @param message PoolBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IPoolBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PoolBatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PoolBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.PoolBatch;

                /**
                 * Decodes a PoolBatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PoolBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.PoolBatch;

                /**
                 * Verifies a PoolBatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PoolBatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PoolBatch
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.PoolBatch;

                /**
                 * Creates a plain object from a PoolBatch message. Also converts values to other types if specified.
                 * @param message PoolBatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.PoolBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PoolBatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DepositMsgState. */
            interface IDepositMsgState {

                /** DepositMsgState msg_height */
                msg_height?: (Long|null);

                /** DepositMsgState msg_index */
                msg_index?: (Long|null);

                /** DepositMsgState executed */
                executed?: (boolean|null);

                /** DepositMsgState succeeded */
                succeeded?: (boolean|null);

                /** DepositMsgState to_be_deleted */
                to_be_deleted?: (boolean|null);

                /** DepositMsgState msg */
                msg?: (tendermint.liquidity.v1beta1.IMsgDepositWithinBatch|null);
            }

            /** Represents a DepositMsgState. */
            class DepositMsgState implements IDepositMsgState {

                /**
                 * Constructs a new DepositMsgState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IDepositMsgState);

                /** DepositMsgState msg_height. */
                public msg_height: Long;

                /** DepositMsgState msg_index. */
                public msg_index: Long;

                /** DepositMsgState executed. */
                public executed: boolean;

                /** DepositMsgState succeeded. */
                public succeeded: boolean;

                /** DepositMsgState to_be_deleted. */
                public to_be_deleted: boolean;

                /** DepositMsgState msg. */
                public msg?: (tendermint.liquidity.v1beta1.IMsgDepositWithinBatch|null);

                /**
                 * Encodes the specified DepositMsgState message. Does not implicitly {@link tendermint.liquidity.v1beta1.DepositMsgState.verify|verify} messages.
                 * @param message DepositMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IDepositMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DepositMsgState message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.DepositMsgState.verify|verify} messages.
                 * @param message DepositMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IDepositMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DepositMsgState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DepositMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.DepositMsgState;

                /**
                 * Decodes a DepositMsgState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DepositMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.DepositMsgState;

                /**
                 * Verifies a DepositMsgState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DepositMsgState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DepositMsgState
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.DepositMsgState;

                /**
                 * Creates a plain object from a DepositMsgState message. Also converts values to other types if specified.
                 * @param message DepositMsgState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.DepositMsgState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DepositMsgState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WithdrawMsgState. */
            interface IWithdrawMsgState {

                /** WithdrawMsgState msg_height */
                msg_height?: (Long|null);

                /** WithdrawMsgState msg_index */
                msg_index?: (Long|null);

                /** WithdrawMsgState executed */
                executed?: (boolean|null);

                /** WithdrawMsgState succeeded */
                succeeded?: (boolean|null);

                /** WithdrawMsgState to_be_deleted */
                to_be_deleted?: (boolean|null);

                /** WithdrawMsgState msg */
                msg?: (tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch|null);
            }

            /** Represents a WithdrawMsgState. */
            class WithdrawMsgState implements IWithdrawMsgState {

                /**
                 * Constructs a new WithdrawMsgState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IWithdrawMsgState);

                /** WithdrawMsgState msg_height. */
                public msg_height: Long;

                /** WithdrawMsgState msg_index. */
                public msg_index: Long;

                /** WithdrawMsgState executed. */
                public executed: boolean;

                /** WithdrawMsgState succeeded. */
                public succeeded: boolean;

                /** WithdrawMsgState to_be_deleted. */
                public to_be_deleted: boolean;

                /** WithdrawMsgState msg. */
                public msg?: (tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch|null);

                /**
                 * Encodes the specified WithdrawMsgState message. Does not implicitly {@link tendermint.liquidity.v1beta1.WithdrawMsgState.verify|verify} messages.
                 * @param message WithdrawMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IWithdrawMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WithdrawMsgState message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.WithdrawMsgState.verify|verify} messages.
                 * @param message WithdrawMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IWithdrawMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WithdrawMsgState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WithdrawMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.WithdrawMsgState;

                /**
                 * Decodes a WithdrawMsgState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WithdrawMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.WithdrawMsgState;

                /**
                 * Verifies a WithdrawMsgState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WithdrawMsgState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WithdrawMsgState
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.WithdrawMsgState;

                /**
                 * Creates a plain object from a WithdrawMsgState message. Also converts values to other types if specified.
                 * @param message WithdrawMsgState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.WithdrawMsgState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WithdrawMsgState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SwapMsgState. */
            interface ISwapMsgState {

                /** SwapMsgState msg_height */
                msg_height?: (Long|null);

                /** SwapMsgState msg_index */
                msg_index?: (Long|null);

                /** SwapMsgState executed */
                executed?: (boolean|null);

                /** SwapMsgState succeeded */
                succeeded?: (boolean|null);

                /** SwapMsgState to_be_deleted */
                to_be_deleted?: (boolean|null);

                /** SwapMsgState order_expiry_height */
                order_expiry_height?: (Long|null);

                /** SwapMsgState exchanged_offer_coin */
                exchanged_offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState remaining_offer_coin */
                remaining_offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState reserved_offer_coin_fee */
                reserved_offer_coin_fee?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState msg */
                msg?: (tendermint.liquidity.v1beta1.IMsgSwapWithinBatch|null);
            }

            /** Represents a SwapMsgState. */
            class SwapMsgState implements ISwapMsgState {

                /**
                 * Constructs a new SwapMsgState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.ISwapMsgState);

                /** SwapMsgState msg_height. */
                public msg_height: Long;

                /** SwapMsgState msg_index. */
                public msg_index: Long;

                /** SwapMsgState executed. */
                public executed: boolean;

                /** SwapMsgState succeeded. */
                public succeeded: boolean;

                /** SwapMsgState to_be_deleted. */
                public to_be_deleted: boolean;

                /** SwapMsgState order_expiry_height. */
                public order_expiry_height: Long;

                /** SwapMsgState exchanged_offer_coin. */
                public exchanged_offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState remaining_offer_coin. */
                public remaining_offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState reserved_offer_coin_fee. */
                public reserved_offer_coin_fee?: (cosmos.base.v1beta1.ICoin|null);

                /** SwapMsgState msg. */
                public msg?: (tendermint.liquidity.v1beta1.IMsgSwapWithinBatch|null);

                /**
                 * Encodes the specified SwapMsgState message. Does not implicitly {@link tendermint.liquidity.v1beta1.SwapMsgState.verify|verify} messages.
                 * @param message SwapMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.ISwapMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SwapMsgState message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.SwapMsgState.verify|verify} messages.
                 * @param message SwapMsgState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.ISwapMsgState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SwapMsgState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SwapMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.SwapMsgState;

                /**
                 * Decodes a SwapMsgState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SwapMsgState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.SwapMsgState;

                /**
                 * Verifies a SwapMsgState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SwapMsgState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SwapMsgState
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.SwapMsgState;

                /**
                 * Creates a plain object from a SwapMsgState message. Also converts values to other types if specified.
                 * @param message SwapMsgState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.SwapMsgState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SwapMsgState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Calls CreatePool.
                 * @param request MsgCreatePool message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgCreatePoolResponse
                 */
                public createPool(request: tendermint.liquidity.v1beta1.IMsgCreatePool, callback: tendermint.liquidity.v1beta1.Msg.CreatePoolCallback): void;

                /**
                 * Calls CreatePool.
                 * @param request MsgCreatePool message or plain object
                 * @returns Promise
                 */
                public createPool(request: tendermint.liquidity.v1beta1.IMsgCreatePool): Promise<tendermint.liquidity.v1beta1.MsgCreatePoolResponse>;

                /**
                 * Calls DepositWithinBatch.
                 * @param request MsgDepositWithinBatch message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgDepositWithinBatchResponse
                 */
                public depositWithinBatch(request: tendermint.liquidity.v1beta1.IMsgDepositWithinBatch, callback: tendermint.liquidity.v1beta1.Msg.DepositWithinBatchCallback): void;

                /**
                 * Calls DepositWithinBatch.
                 * @param request MsgDepositWithinBatch message or plain object
                 * @returns Promise
                 */
                public depositWithinBatch(request: tendermint.liquidity.v1beta1.IMsgDepositWithinBatch): Promise<tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse>;

                /**
                 * Calls WithdrawWithinBatch.
                 * @param request MsgWithdrawWithinBatch message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgWithdrawWithinBatchResponse
                 */
                public withdrawWithinBatch(request: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch, callback: tendermint.liquidity.v1beta1.Msg.WithdrawWithinBatchCallback): void;

                /**
                 * Calls WithdrawWithinBatch.
                 * @param request MsgWithdrawWithinBatch message or plain object
                 * @returns Promise
                 */
                public withdrawWithinBatch(request: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch): Promise<tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse>;

                /**
                 * Calls Swap.
                 * @param request MsgSwapWithinBatch message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgSwapWithinBatchResponse
                 */
                public swap(request: tendermint.liquidity.v1beta1.IMsgSwapWithinBatch, callback: tendermint.liquidity.v1beta1.Msg.SwapCallback): void;

                /**
                 * Calls Swap.
                 * @param request MsgSwapWithinBatch message or plain object
                 * @returns Promise
                 */
                public swap(request: tendermint.liquidity.v1beta1.IMsgSwapWithinBatch): Promise<tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse>;
            }

            namespace Msg {

                /**
                 * Callback as used by {@link tendermint.liquidity.v1beta1.Msg#createPool}.
                 * @param error Error, if any
                 * @param [response] MsgCreatePoolResponse
                 */
                type CreatePoolCallback = (error: (Error|null), response?: tendermint.liquidity.v1beta1.MsgCreatePoolResponse) => void;

                /**
                 * Callback as used by {@link tendermint.liquidity.v1beta1.Msg#depositWithinBatch}.
                 * @param error Error, if any
                 * @param [response] MsgDepositWithinBatchResponse
                 */
                type DepositWithinBatchCallback = (error: (Error|null), response?: tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse) => void;

                /**
                 * Callback as used by {@link tendermint.liquidity.v1beta1.Msg#withdrawWithinBatch}.
                 * @param error Error, if any
                 * @param [response] MsgWithdrawWithinBatchResponse
                 */
                type WithdrawWithinBatchCallback = (error: (Error|null), response?: tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse) => void;

                /**
                 * Callback as used by {@link tendermint.liquidity.v1beta1.Msg#swap}.
                 * @param error Error, if any
                 * @param [response] MsgSwapWithinBatchResponse
                 */
                type SwapCallback = (error: (Error|null), response?: tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse) => void;
            }

            /** Properties of a MsgCreatePool. */
            interface IMsgCreatePool {

                /** MsgCreatePool pool_creator_address */
                pool_creator_address?: (string|null);

                /** MsgCreatePool pool_type_id */
                pool_type_id?: (number|null);

                /** MsgCreatePool deposit_coins */
                deposit_coins?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a MsgCreatePool. */
            class MsgCreatePool implements IMsgCreatePool {

                /**
                 * Constructs a new MsgCreatePool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgCreatePool);

                /** MsgCreatePool pool_creator_address. */
                public pool_creator_address: string;

                /** MsgCreatePool pool_type_id. */
                public pool_type_id: number;

                /** MsgCreatePool deposit_coins. */
                public deposit_coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified MsgCreatePool message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgCreatePool.verify|verify} messages.
                 * @param message MsgCreatePool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgCreatePool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgCreatePool message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgCreatePool.verify|verify} messages.
                 * @param message MsgCreatePool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgCreatePool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgCreatePool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgCreatePool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgCreatePool;

                /**
                 * Decodes a MsgCreatePool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgCreatePool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgCreatePool;

                /**
                 * Verifies a MsgCreatePool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgCreatePool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgCreatePool
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgCreatePool;

                /**
                 * Creates a plain object from a MsgCreatePool message. Also converts values to other types if specified.
                 * @param message MsgCreatePool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgCreatePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgCreatePool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgCreatePoolResponse. */
            interface IMsgCreatePoolResponse {
            }

            /** Represents a MsgCreatePoolResponse. */
            class MsgCreatePoolResponse implements IMsgCreatePoolResponse {

                /**
                 * Constructs a new MsgCreatePoolResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgCreatePoolResponse);

                /**
                 * Encodes the specified MsgCreatePoolResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgCreatePoolResponse.verify|verify} messages.
                 * @param message MsgCreatePoolResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgCreatePoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgCreatePoolResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgCreatePoolResponse.verify|verify} messages.
                 * @param message MsgCreatePoolResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgCreatePoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgCreatePoolResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgCreatePoolResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgCreatePoolResponse;

                /**
                 * Decodes a MsgCreatePoolResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgCreatePoolResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgCreatePoolResponse;

                /**
                 * Verifies a MsgCreatePoolResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgCreatePoolResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgCreatePoolResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgCreatePoolResponse;

                /**
                 * Creates a plain object from a MsgCreatePoolResponse message. Also converts values to other types if specified.
                 * @param message MsgCreatePoolResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgCreatePoolResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgCreatePoolResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgDepositWithinBatch. */
            interface IMsgDepositWithinBatch {

                /** MsgDepositWithinBatch depositor_address */
                depositor_address?: (string|null);

                /** MsgDepositWithinBatch pool_id */
                pool_id?: (Long|null);

                /** MsgDepositWithinBatch deposit_coins */
                deposit_coins?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a MsgDepositWithinBatch. */
            class MsgDepositWithinBatch implements IMsgDepositWithinBatch {

                /**
                 * Constructs a new MsgDepositWithinBatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgDepositWithinBatch);

                /** MsgDepositWithinBatch depositor_address. */
                public depositor_address: string;

                /** MsgDepositWithinBatch pool_id. */
                public pool_id: Long;

                /** MsgDepositWithinBatch deposit_coins. */
                public deposit_coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified MsgDepositWithinBatch message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgDepositWithinBatch.verify|verify} messages.
                 * @param message MsgDepositWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgDepositWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgDepositWithinBatch message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgDepositWithinBatch.verify|verify} messages.
                 * @param message MsgDepositWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgDepositWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgDepositWithinBatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgDepositWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgDepositWithinBatch;

                /**
                 * Decodes a MsgDepositWithinBatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgDepositWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgDepositWithinBatch;

                /**
                 * Verifies a MsgDepositWithinBatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgDepositWithinBatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgDepositWithinBatch
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgDepositWithinBatch;

                /**
                 * Creates a plain object from a MsgDepositWithinBatch message. Also converts values to other types if specified.
                 * @param message MsgDepositWithinBatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgDepositWithinBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgDepositWithinBatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgDepositWithinBatchResponse. */
            interface IMsgDepositWithinBatchResponse {
            }

            /** Represents a MsgDepositWithinBatchResponse. */
            class MsgDepositWithinBatchResponse implements IMsgDepositWithinBatchResponse {

                /**
                 * Constructs a new MsgDepositWithinBatchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgDepositWithinBatchResponse);

                /**
                 * Encodes the specified MsgDepositWithinBatchResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse.verify|verify} messages.
                 * @param message MsgDepositWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgDepositWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgDepositWithinBatchResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse.verify|verify} messages.
                 * @param message MsgDepositWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgDepositWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgDepositWithinBatchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgDepositWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse;

                /**
                 * Decodes a MsgDepositWithinBatchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgDepositWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse;

                /**
                 * Verifies a MsgDepositWithinBatchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgDepositWithinBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgDepositWithinBatchResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse;

                /**
                 * Creates a plain object from a MsgDepositWithinBatchResponse message. Also converts values to other types if specified.
                 * @param message MsgDepositWithinBatchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgDepositWithinBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgDepositWithinBatchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgWithdrawWithinBatch. */
            interface IMsgWithdrawWithinBatch {

                /** MsgWithdrawWithinBatch withdrawer_address */
                withdrawer_address?: (string|null);

                /** MsgWithdrawWithinBatch pool_id */
                pool_id?: (Long|null);

                /** MsgWithdrawWithinBatch pool_coin */
                pool_coin?: (cosmos.base.v1beta1.ICoin|null);
            }

            /** Represents a MsgWithdrawWithinBatch. */
            class MsgWithdrawWithinBatch implements IMsgWithdrawWithinBatch {

                /**
                 * Constructs a new MsgWithdrawWithinBatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch);

                /** MsgWithdrawWithinBatch withdrawer_address. */
                public withdrawer_address: string;

                /** MsgWithdrawWithinBatch pool_id. */
                public pool_id: Long;

                /** MsgWithdrawWithinBatch pool_coin. */
                public pool_coin?: (cosmos.base.v1beta1.ICoin|null);

                /**
                 * Encodes the specified MsgWithdrawWithinBatch message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch.verify|verify} messages.
                 * @param message MsgWithdrawWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgWithdrawWithinBatch message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch.verify|verify} messages.
                 * @param message MsgWithdrawWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawWithinBatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgWithdrawWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch;

                /**
                 * Decodes a MsgWithdrawWithinBatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgWithdrawWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch;

                /**
                 * Verifies a MsgWithdrawWithinBatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgWithdrawWithinBatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgWithdrawWithinBatch
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch;

                /**
                 * Creates a plain object from a MsgWithdrawWithinBatch message. Also converts values to other types if specified.
                 * @param message MsgWithdrawWithinBatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgWithdrawWithinBatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgWithdrawWithinBatchResponse. */
            interface IMsgWithdrawWithinBatchResponse {
            }

            /** Represents a MsgWithdrawWithinBatchResponse. */
            class MsgWithdrawWithinBatchResponse implements IMsgWithdrawWithinBatchResponse {

                /**
                 * Constructs a new MsgWithdrawWithinBatchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatchResponse);

                /**
                 * Encodes the specified MsgWithdrawWithinBatchResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse.verify|verify} messages.
                 * @param message MsgWithdrawWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgWithdrawWithinBatchResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse.verify|verify} messages.
                 * @param message MsgWithdrawWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgWithdrawWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgWithdrawWithinBatchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgWithdrawWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse;

                /**
                 * Decodes a MsgWithdrawWithinBatchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgWithdrawWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse;

                /**
                 * Verifies a MsgWithdrawWithinBatchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgWithdrawWithinBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgWithdrawWithinBatchResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse;

                /**
                 * Creates a plain object from a MsgWithdrawWithinBatchResponse message. Also converts values to other types if specified.
                 * @param message MsgWithdrawWithinBatchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgWithdrawWithinBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgWithdrawWithinBatchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgSwapWithinBatch. */
            interface IMsgSwapWithinBatch {

                /** MsgSwapWithinBatch swap_requester_address */
                swap_requester_address?: (string|null);

                /** MsgSwapWithinBatch pool_id */
                pool_id?: (Long|null);

                /** MsgSwapWithinBatch swap_type_id */
                swap_type_id?: (number|null);

                /** MsgSwapWithinBatch offer_coin */
                offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** MsgSwapWithinBatch demand_coin_denom */
                demand_coin_denom?: (string|null);

                /** MsgSwapWithinBatch offer_coin_fee */
                offer_coin_fee?: (cosmos.base.v1beta1.ICoin|null);

                /** MsgSwapWithinBatch order_price */
                order_price?: (string|null);
            }

            /** Represents a MsgSwapWithinBatch. */
            class MsgSwapWithinBatch implements IMsgSwapWithinBatch {

                /**
                 * Constructs a new MsgSwapWithinBatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgSwapWithinBatch);

                /** MsgSwapWithinBatch swap_requester_address. */
                public swap_requester_address: string;

                /** MsgSwapWithinBatch pool_id. */
                public pool_id: Long;

                /** MsgSwapWithinBatch swap_type_id. */
                public swap_type_id: number;

                /** MsgSwapWithinBatch offer_coin. */
                public offer_coin?: (cosmos.base.v1beta1.ICoin|null);

                /** MsgSwapWithinBatch demand_coin_denom. */
                public demand_coin_denom: string;

                /** MsgSwapWithinBatch offer_coin_fee. */
                public offer_coin_fee?: (cosmos.base.v1beta1.ICoin|null);

                /** MsgSwapWithinBatch order_price. */
                public order_price: string;

                /**
                 * Encodes the specified MsgSwapWithinBatch message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgSwapWithinBatch.verify|verify} messages.
                 * @param message MsgSwapWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgSwapWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgSwapWithinBatch message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgSwapWithinBatch.verify|verify} messages.
                 * @param message MsgSwapWithinBatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgSwapWithinBatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSwapWithinBatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgSwapWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgSwapWithinBatch;

                /**
                 * Decodes a MsgSwapWithinBatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgSwapWithinBatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgSwapWithinBatch;

                /**
                 * Verifies a MsgSwapWithinBatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgSwapWithinBatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgSwapWithinBatch
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgSwapWithinBatch;

                /**
                 * Creates a plain object from a MsgSwapWithinBatch message. Also converts values to other types if specified.
                 * @param message MsgSwapWithinBatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgSwapWithinBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgSwapWithinBatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgSwapWithinBatchResponse. */
            interface IMsgSwapWithinBatchResponse {
            }

            /** Represents a MsgSwapWithinBatchResponse. */
            class MsgSwapWithinBatchResponse implements IMsgSwapWithinBatchResponse {

                /**
                 * Constructs a new MsgSwapWithinBatchResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IMsgSwapWithinBatchResponse);

                /**
                 * Encodes the specified MsgSwapWithinBatchResponse message. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse.verify|verify} messages.
                 * @param message MsgSwapWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IMsgSwapWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgSwapWithinBatchResponse message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse.verify|verify} messages.
                 * @param message MsgSwapWithinBatchResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IMsgSwapWithinBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSwapWithinBatchResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgSwapWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse;

                /**
                 * Decodes a MsgSwapWithinBatchResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgSwapWithinBatchResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse;

                /**
                 * Verifies a MsgSwapWithinBatchResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgSwapWithinBatchResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgSwapWithinBatchResponse
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse;

                /**
                 * Creates a plain object from a MsgSwapWithinBatchResponse message. Also converts values to other types if specified.
                 * @param message MsgSwapWithinBatchResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.MsgSwapWithinBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgSwapWithinBatchResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PoolRecord. */
            interface IPoolRecord {

                /** PoolRecord pool */
                pool?: (tendermint.liquidity.v1beta1.IPool|null);

                /** PoolRecord pool_metadata */
                pool_metadata?: (tendermint.liquidity.v1beta1.IPoolMetadata|null);

                /** PoolRecord pool_batch */
                pool_batch?: (tendermint.liquidity.v1beta1.IPoolBatch|null);

                /** PoolRecord deposit_msg_states */
                deposit_msg_states?: (tendermint.liquidity.v1beta1.IDepositMsgState[]|null);

                /** PoolRecord withdraw_msg_states */
                withdraw_msg_states?: (tendermint.liquidity.v1beta1.IWithdrawMsgState[]|null);

                /** PoolRecord swap_msg_states */
                swap_msg_states?: (tendermint.liquidity.v1beta1.ISwapMsgState[]|null);
            }

            /** Represents a PoolRecord. */
            class PoolRecord implements IPoolRecord {

                /**
                 * Constructs a new PoolRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IPoolRecord);

                /** PoolRecord pool. */
                public pool?: (tendermint.liquidity.v1beta1.IPool|null);

                /** PoolRecord pool_metadata. */
                public pool_metadata?: (tendermint.liquidity.v1beta1.IPoolMetadata|null);

                /** PoolRecord pool_batch. */
                public pool_batch?: (tendermint.liquidity.v1beta1.IPoolBatch|null);

                /** PoolRecord deposit_msg_states. */
                public deposit_msg_states: tendermint.liquidity.v1beta1.IDepositMsgState[];

                /** PoolRecord withdraw_msg_states. */
                public withdraw_msg_states: tendermint.liquidity.v1beta1.IWithdrawMsgState[];

                /** PoolRecord swap_msg_states. */
                public swap_msg_states: tendermint.liquidity.v1beta1.ISwapMsgState[];

                /**
                 * Encodes the specified PoolRecord message. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolRecord.verify|verify} messages.
                 * @param message PoolRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IPoolRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PoolRecord message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.PoolRecord.verify|verify} messages.
                 * @param message PoolRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IPoolRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PoolRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PoolRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.PoolRecord;

                /**
                 * Decodes a PoolRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PoolRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.PoolRecord;

                /**
                 * Verifies a PoolRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PoolRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PoolRecord
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.PoolRecord;

                /**
                 * Creates a plain object from a PoolRecord message. Also converts values to other types if specified.
                 * @param message PoolRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.PoolRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PoolRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GenesisState. */
            interface IGenesisState {

                /** GenesisState params */
                params?: (tendermint.liquidity.v1beta1.IParams|null);

                /** GenesisState pool_records */
                pool_records?: (tendermint.liquidity.v1beta1.IPoolRecord[]|null);
            }

            /** Represents a GenesisState. */
            class GenesisState implements IGenesisState {

                /**
                 * Constructs a new GenesisState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tendermint.liquidity.v1beta1.IGenesisState);

                /** GenesisState params. */
                public params?: (tendermint.liquidity.v1beta1.IParams|null);

                /** GenesisState pool_records. */
                public pool_records: tendermint.liquidity.v1beta1.IPoolRecord[];

                /**
                 * Encodes the specified GenesisState message. Does not implicitly {@link tendermint.liquidity.v1beta1.GenesisState.verify|verify} messages.
                 * @param message GenesisState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tendermint.liquidity.v1beta1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link tendermint.liquidity.v1beta1.GenesisState.verify|verify} messages.
                 * @param message GenesisState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tendermint.liquidity.v1beta1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GenesisState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GenesisState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tendermint.liquidity.v1beta1.GenesisState;

                /**
                 * Decodes a GenesisState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GenesisState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tendermint.liquidity.v1beta1.GenesisState;

                /**
                 * Verifies a GenesisState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GenesisState
                 */
                public static fromObject(object: { [k: string]: any }): tendermint.liquidity.v1beta1.GenesisState;

                /**
                 * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
                 * @param message GenesisState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tendermint.liquidity.v1beta1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GenesisState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goproto_getters_all */
            ".gogoproto.goproto_getters_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_prefix_all */
            ".gogoproto.goproto_enum_prefix_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_stringer_all */
            ".gogoproto.goproto_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.verbose_equal_all */
            ".gogoproto.verbose_equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.face_all */
            ".gogoproto.face_all"?: (boolean|null);

            /** FileOptions .gogoproto.gostring_all */
            ".gogoproto.gostring_all"?: (boolean|null);

            /** FileOptions .gogoproto.populate_all */
            ".gogoproto.populate_all"?: (boolean|null);

            /** FileOptions .gogoproto.stringer_all */
            ".gogoproto.stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.onlyone_all */
            ".gogoproto.onlyone_all"?: (boolean|null);

            /** FileOptions .gogoproto.equal_all */
            ".gogoproto.equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.description_all */
            ".gogoproto.description_all"?: (boolean|null);

            /** FileOptions .gogoproto.testgen_all */
            ".gogoproto.testgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.benchgen_all */
            ".gogoproto.benchgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.marshaler_all */
            ".gogoproto.marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshaler_all */
            ".gogoproto.unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.stable_marshaler_all */
            ".gogoproto.stable_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.sizer_all */
            ".gogoproto.sizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_stringer_all */
            ".gogoproto.goproto_enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.enum_stringer_all */
            ".gogoproto.enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_marshaler_all */
            ".gogoproto.unsafe_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_unmarshaler_all */
            ".gogoproto.unsafe_unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_extensions_map_all */
            ".gogoproto.goproto_extensions_map_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unrecognized_all */
            ".gogoproto.goproto_unrecognized_all"?: (boolean|null);

            /** FileOptions .gogoproto.gogoproto_import */
            ".gogoproto.gogoproto_import"?: (boolean|null);

            /** FileOptions .gogoproto.protosizer_all */
            ".gogoproto.protosizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.compare_all */
            ".gogoproto.compare_all"?: (boolean|null);

            /** FileOptions .gogoproto.typedecl_all */
            ".gogoproto.typedecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.enumdecl_all */
            ".gogoproto.enumdecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_registration */
            ".gogoproto.goproto_registration"?: (boolean|null);

            /** FileOptions .gogoproto.messagename_all */
            ".gogoproto.messagename_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_sizecache_all */
            ".gogoproto.goproto_sizecache_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unkeyed_all */
            ".gogoproto.goproto_unkeyed_all"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goproto_getters */
            ".gogoproto.goproto_getters"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_stringer */
            ".gogoproto.goproto_stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verbose_equal */
            ".gogoproto.verbose_equal"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stable_marshaler */
            ".gogoproto.stable_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_marshaler */
            ".gogoproto.unsafe_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_unmarshaler */
            ".gogoproto.unsafe_unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_extensions_map */
            ".gogoproto.goproto_extensions_map"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unrecognized */
            ".gogoproto.goproto_unrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_sizecache */
            ".gogoproto.goproto_sizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unkeyed */
            ".gogoproto.goproto_unkeyed"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goproto_enum_prefix */
            ".gogoproto.goproto_enum_prefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goproto_enum_stringer */
            ".gogoproto.goproto_enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_stringer */
            ".gogoproto.enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_customname */
            ".gogoproto.enum_customname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalue_customname */
            ".gogoproto.enumvalue_customname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: Long;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: Long;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fully_decode_reserved_expansion */
            fully_decode_reserved_expansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fully_decode_reserved_expansion. */
            public fully_decode_reserved_expansion: boolean;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule response_body */
            response_body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule response_body. */
            public response_body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace query. */
        namespace query {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a PageRequest. */
                interface IPageRequest {

                    /** PageRequest key */
                    key?: (Uint8Array|null);

                    /** PageRequest offset */
                    offset?: (Long|null);

                    /** PageRequest limit */
                    limit?: (Long|null);

                    /** PageRequest count_total */
                    count_total?: (boolean|null);
                }

                /** Represents a PageRequest. */
                class PageRequest implements IPageRequest {

                    /**
                     * Constructs a new PageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageRequest);

                    /** PageRequest key. */
                    public key: Uint8Array;

                    /** PageRequest offset. */
                    public offset: Long;

                    /** PageRequest limit. */
                    public limit: Long;

                    /** PageRequest count_total. */
                    public count_total: boolean;

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Verifies a PageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @param message PageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PageResponse. */
                interface IPageResponse {

                    /** PageResponse next_key */
                    next_key?: (Uint8Array|null);

                    /** PageResponse total */
                    total?: (Long|null);
                }

                /** Represents a PageResponse. */
                class PageResponse implements IPageResponse {

                    /**
                     * Constructs a new PageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageResponse);

                    /** PageResponse next_key. */
                    public next_key: Uint8Array;

                    /** PageResponse total. */
                    public total: Long;

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Verifies a PageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @param message PageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
