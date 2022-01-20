import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IIe11WarningApplicationCustomizerProperties {
    testMessage: string;
    Top: string;
    Bottom: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class Ie11WarningApplicationCustomizer extends BaseApplicationCustomizer<IIe11WarningApplicationCustomizerProperties> {
    private _topPlaceholder;
    onInit(): Promise<void>;
    private _renderPlaceHolders;
    private _onDispose;
}
//# sourceMappingURL=Ie11WarningApplicationCustomizer.d.ts.map