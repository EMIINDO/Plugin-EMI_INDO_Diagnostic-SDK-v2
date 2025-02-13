"use strict";
{

    globalThis.C3.Plugins.EMI_INDO_Diagnostic.Instance = class DiagnosticInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }
            if (typeof cordova == 'undefined') {
                return;
            }
            else { };
            this.ins = globalThis.C3.Plugins.EMI_INDO_Diagnostic.Cnds;
            this.EMI_INDO = cordova.plugins.diagnostic;
            this.res = "";


        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

        loc1(_index) {
            switch (_index) {
                case 0:
                    return "HIGH_ACCURACY";
                case 1:
                    return "BATTERY_SAVING";
                case 2:
                    return "DEVICE_ONLY";
                case 3:
                    return "LOCATION_OFF";
            }
        };




        loc2(_index) {
            switch (_index) {
                case 0:
                    return "ALWAYS";
                case 1:
                    return "WHEN_IN_USE";

            }
        };


    };
}