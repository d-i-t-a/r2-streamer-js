// https://github.com/edcarroll/ta-json
import {
    DateConverter,
    // IPropertyConverter,
    JsonConverter,
    JsonElementType,
    JsonObject,
    JsonProperty,
    OnDeserialized,
} from "ta-json";

import { ContentKey } from "./lcp-contentkey";
import { UserKey } from "./lcp-userkey";

@JsonObject()
export class Encryption {
    @JsonProperty("profile")
    public Profile: string;

    @JsonProperty("content_key")
    public ContentKey: ContentKey;

    @JsonProperty("user_key")
    public UserKey: UserKey;
}
