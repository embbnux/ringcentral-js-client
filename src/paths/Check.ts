// This is Generated Source.
import PermissionDetailsInfo from "../definitions/PermissionDetailsInfo";
import PathSegment from "../PathSegment";

export default class Check extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("check", id, prv, service);
    }

    /**
     *  Check User Permissions
     */
    get(query?: GetQuery): Promise<GetResponse> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Check User Permissions
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }
}

export interface GetQuery {

    /**
     * Permission to check
     */
    permissionId?: string;

    /**
     * Optional. Internal identifier of an extension for which user permissions are to be checked. The default value is the currently logged-in extension
     */
    targetExtensionId?: string;
}

export interface GetResponse {

    /**
     * Canonical URI of a permission resource
     */
    uri?: string;

    /**
     * Specifies if check result is successful or not
     */
    successful?: boolean;

    /**
     * Information on a permission checked. Returned if successful is 'True'
     */
    details?: PermissionDetailsInfo;

    /**
     * List of active scopes for permission. Returned if successful is 'True'
     */
    scopes?: string[];
}
