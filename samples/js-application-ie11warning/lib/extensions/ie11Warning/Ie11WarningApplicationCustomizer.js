var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'Ie11WarningApplicationCustomizerStrings';
import styles from './AppCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var LOG_SOURCE = 'Ie11WarningApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var Ie11WarningApplicationCustomizer = /** @class */ (function (_super) {
    __extends(Ie11WarningApplicationCustomizer, _super);
    function Ie11WarningApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //private _bottomPlaceholder: PlaceholderContent | undefined;
    Ie11WarningApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        return Promise.resolve();
    };
    Ie11WarningApplicationCustomizer.prototype._renderPlaceHolders = function () {
        // console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
        // console.log(
        //   "Available placeholders: ",
        //   this.context.placeholderProvider.placeholderNames
        //     .map(name => PlaceholderName[name])
        //     .join(", ")
        // );
        // Handling the top placeholder
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._topPlaceholder) {
                console.error("The expected placeholder (Top) was not found.");
                return;
            }
            if (this.properties) {
                var topString = this.properties.Top;
                if (!topString) {
                    topString = "";
                }
                var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
                //Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
                if (isIE11) {
                    //Dialog.alert("Vous utilisez un naviguateur non supporté, pour lancer correctement ce site veuillez utiliser Chrome ou Edge");
                }
                // <i class="ms-Icon ms-Icon--Info" aria-hidden="true">
                if (isIE11) {
                    if (this._topPlaceholder.domElement) {
                        this._topPlaceholder.domElement.innerHTML = "\n          <div class=\"" + styles.app + "\">\n            <div class=\"" + styles.top + "\">\n              </i>Vous avez ouvert votre intranet avec l'application Internet Explorer <br/>\u26A0 Attention \u26A0 pour que votre Intranet TellUs fonctionne correctement ouvrez-le avec les applications Google chrome <br/> ou Microsoft Edge depuis le bouton d\u00E9marrer de votre ordinateur. " + escape(topString) + "\n            </div>\n          </div>";
                    }
                }
            }
        }
        // Handling the bottom placeholder
        // if (!this._bottomPlaceholder) {
        //   this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        //     PlaceholderName.Bottom,
        //     { onDispose: this._onDispose }
        //   );
        //   // The extension should not assume that the expected placeholder is available.
        //   if (!this._bottomPlaceholder) {
        //     console.error("The expected placeholder (Bottom) was not found.");
        //     return;
        //   }
        //   if (this.properties) {
        //     let bottomString: string = this.properties.Bottom;
        //     if (!bottomString) {
        //       bottomString = "(Bottom property was not defined.)";
        //     }
        //     if (this._bottomPlaceholder.domElement) {
        //       this._bottomPlaceholder.domElement.innerHTML = `
        //       <div class="${styles.app}">
        //         <div class="${styles.bottom}">
        //           <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
        //         bottomString
        //       )}
        //         </div>
        //       </div>`;
        //     }
        //   }
        // }
    };
    Ie11WarningApplicationCustomizer.prototype._onDispose = function () {
        console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    };
    __decorate([
        override
    ], Ie11WarningApplicationCustomizer.prototype, "onInit", null);
    return Ie11WarningApplicationCustomizer;
}(BaseApplicationCustomizer));
export default Ie11WarningApplicationCustomizer;
//# sourceMappingURL=Ie11WarningApplicationCustomizer.js.map