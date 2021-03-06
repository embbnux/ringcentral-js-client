// This is Generated Source.
import CallLogRecord from "../definitions/CallLogRecord";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class CallLogSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log-sync", id, prv, service);
    }

    /**
     *  Call Log Synchronization
     */
    list(query?: ListQuery): Promise<PagingResult<CallLogRecord>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Call Log Synchronization
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }
}

export interface ListQuery {

    /**
     * Type of synchronization. 'FSync' is a default value
     */
    syncType?: "FSync" | "ISync";

    /**
     * Value of syncToken property of last sync request response
     */
    syncToken?: string;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
     */
    dateFrom?: string;

    /**
     * For FSync the parameter is mandatory, it limits the number of records to be returned in response. For ISync it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250
     */
    recordCount?: number;

    /**
     * Type of calls to be returned. The default value is 'All'
     */
    statusGroup?: "Missed" | "All";
}
