// This is Generated Source.
import PersonalContactInfo from "../definitions/PersonalContactInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class AddressBookSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("address-book-sync", id, prv, service);
    }

    /**
     *  Contacts Synchronization
     */
    list(query?: ListQuery): Promise<PagingResult<PersonalContactInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Contacts Synchronization
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
     * Type of synchronization. The default value is 'FSync'
     */
    syncType?: "FSync" | "ISync";

    /**
     * Value of syncToken property of the last sync request response
     */
    syncToken?: string;

    /**
     * Number of records per page to be returned. The max number of records is 250, which is also the default. For FSync — if the number of records exceeds the parameter value (either specified or default), all of the pages can be retrieved in several requests. For ISync — if the number of records exceeds the page size, the number of incoming changes to this number is limited
     */
    perPage?: number;

    /**
     * Internal identifier of a page. It can be obtained from the 'nextPageId' parameter passed in response body
     */
    pageId?: number;
}
