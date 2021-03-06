// This is Generated Source.
import AnsweringRuleInfo from "../definitions/AnsweringRuleInfo";
import AnsweringRuleScheduleInfo from "../definitions/AnsweringRuleScheduleInfo";
import CalledNumberInfo from "../definitions/CalledNumberInfo";
import CallersInfo from "../definitions/CallersInfo";
import ForwardingInfo from "../definitions/ForwardingInfo";
import GreetingInfo from "../definitions/GreetingInfo";
import UnconditionalForwardingInfo from "../definitions/UnconditionalForwardingInfo";
import VoicemailInfo from "../definitions/VoicemailInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class AnsweringRule extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("answering-rule", id, prv, service);
    }

    /**
     *  Create Custom Answering Rule
     */
    post(body: PostBody): Promise<AnsweringRuleInfo> {
        return this.postRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Create Custom Answering Rule
     *  return {ApiResponse}
     */
    postRaw(body: PostBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Get Answering Rules List
     */
    list(): Promise<PagingResult<AnsweringRuleInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Answering Rules List
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Delete Answering Rule by ID
     */
    delete(): Promise<void> {
        return this.deleteRaw.apply(this, arguments);
    }

    /**
     *  Delete Answering Rule by ID
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Get Custom Answering Rule by ID
     */
    get(): Promise<AnsweringRuleInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Custom Answering Rule by ID
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Update Answering Rule by ID
     */
    put(body: PutBody): Promise<AnsweringRuleInfo> {
        return this.putRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Update Answering Rule by ID
     *  return {ApiResponse}
     */
    putRaw(body: PutBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface PostBody {

    /**
     * Specifies if the rule is active or inactive. The default value is 'True'
     */
    enabled?: boolean;

    /**
     * Type of an answering rule, the supported value is 'Custom'
     */
    type?: string;

    /**
     * Name of an answering rule specified by user. Max number of symbols is 30
     */
    name?: string;

    /**
     * Answering rule will be applied when calls are received from the specified caller(s)
     */
    callers?: CallersInfo[];

    /**
     * Answering rule will be applied when calling the specified number(s)
     */
    calledNumbers?: CalledNumberInfo[];

    /**
     * Schedule when an answering rule should be applied
     */
    schedule?: AnsweringRuleScheduleInfo;

    /**
     * Specifies how incoming calls should be forwarded. The default value is 'ForwardCalls'
     */
    callHandlingAction?: "ForwardCalls" | "UnconditionalForwarding";

    /**
     * Forwarding parameters. If the 'callHandlingAction' parameter value is set to 'ForwardCalls' - should be specified . The settings determine the forwarding numbers to which the call should be forwarded. If not specified in request, then the business-hours forwarding rules are set by default
     */
    forwarding?: ForwardingInfo;

    /**
     * Unconditional forwarding parameters. If the 'callHandlingAction' parameter value is set to 'UnconditionalForwarding' - should be specified
     */
    unconditionalForwarding?: UnconditionalForwardingInfo;

    /**
     * Specifies whether to take a voicemail and who should do it
     */
    voiceMail?: VoicemailInfo;
}

export interface PutBody {

    /**
     * Specifies if the answering rule is active or not
     */
    enabled?: boolean;

    /**
     * Custom name of an answering rule. The maximum number of characters is 64
     */
    name?: string;

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding?: ForwardingInfo;

    /**
     * Predefined greetings applied for an answering rule
     */
    greetings?: GreetingInfo[];
}
