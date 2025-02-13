"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_Diagnostic.Acts = {
        Switchtosettings()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
        
            const self = this;
            this.EMI_INDO.switchToSettings(function()
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Successfully switched to Settings app");
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });

        },

        Switchtowirelesssettings()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.switchToWirelessSettings(success, fail);

            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (result);
            }
        },

        Switchtomobiledatasettings()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.switchToMobileDataSettings(success, fail);

            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (result);
            }
        },

        Permissionstatus()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            if (somePermissionStatus === this.EMI_INDO.permissionStatus.GRANTED, success, fail)
            {
                // Do something
            }

            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (result);
            }

        },

        Getpermissionauthorizationstatus()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.getPermissionAuthorizationStatus(function(status)
            {
                switch (status)
                {
                    case this.EMI_INDO.permissionStatus.GRANTED:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission granted to use the camera");
                        break;
                    case this.EMI_INDO.permissionStatus.NOT_REQUESTED:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission to use the camera has not been requested yet");
                        break;
                    case this.EMI_INDO.permissionStatus.DENIED_ONCE:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission denied to use the camera - ask again?");
                        break;
                    case this.EMI_INDO.permissionStatus.DENIED_ALWAYS:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission permanently denied to use the camera - guess we won't be using it then!");
                        break;
                }
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            }, this.EMI_INDO.permission.CAMERA);

        },

        Requestruntimepermission()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.requestRuntimePermission(function(status)
            {
                switch (status)
                {
                    case this.EMI_INDO.permissionStatus.GRANTED:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission granted to use the camera");
                        break;
                    case this.EMI_INDO.permissionStatus.NOT_REQUESTED:
                        self._trigger(self.ins.Core_Module);
                        self.res = ("Permission to use the camera has not been requested yet");
                        break;
                    case this.EMI_INDO.permissionStatus.DENIED_ONCe:
                        self._trigger(C3.Plugins.EMI_INDO_Diagnostic.cnds.Core_Module);
                        self.res = ("Permission denied to use the camera - ask again?");
                        break;
                    case this.EMI_INDO.permissionStatus.DENIED_ALWAYS:
                        self._trigger(C3.Plugins.EMI_INDO_Diagnostic.cnds.Core_Module);
                        self.res = ("Permission permanently denied to use the camera - guess we won't be using it then!");
                        break;
                }
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            }, this.EMI_INDO.permission.CAMERA);
        },

        Isrequestingpermission()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            var isRequesting = cordova.plugins.diagnostic.isRequestingPermission();
            if (!isRequesting)
            {
                requestSomePermissions();
            }
            else
            {
                this.EMI_INDO.registerPermissionRequestCompleteHandler(function(statuses)
                {
                    this.EMI_INDO.registerPermissionRequestCompleteHandler(null); // de-register handler after single call
                    requestSomePermissions();
                });
            }
        },

        Registerpermissionrequestcompletehandler()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.registerPermissionRequestCompleteHandler(success, fail);

            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (result);
            }

        },

        Isdataroamingenabled()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isDataRoamingEnabled(function(enabled)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Data roaming is " + (enabled ? "enabled" : "disabled"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Isadbmodeenabled()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isADBModeEnabled(function(enabled)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("ADB mode(debug mode) is " + (enabled ? "enabled" : "disabled"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Isdevicerooted()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isDeviceRooted(function(rooted)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("device is " + (rooted ? "rooted" : "not rooted"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Isbackgroundrefreshauthorized()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isBackgroundRefreshAuthorized(function(authorized)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("App is " + (authorized ? "authorized" : "not authorized") + " to perform background refresh");
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Getbackgroundrefreshstatus()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.getBackgroundRefreshStatus(function(status)
            {
                if (status === cordova.plugins.diagnostic.permissionStatus.GRANTED)
                {
                    self._trigger(self.ins.Core_Module);
                    self.res = ("Background refresh is allowed");
                }
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });

        },

        Locationmode(lm1)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;

            this.EMI_INDO.getLocationMode(success, fail, function(status)
            {

                this.EMI_INDO.locationMode = self.loc1(lm1), success, fail;

            });

            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + result);
            }

        },

        Locationauthorizationmode(lm2)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.requestLocationAuthorization(success, fail, function(status)
            {

                }, this.EMI_INDO.locationAuthorizationMode = self.loc2(lm2), success, fail, );


            function success(result)
            {
                self._trigger(self.ins.Core_Module);
                self.res = (result);
            }

            function fail(result)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (result);
            }

        },

        Getbluetoothstate(an, is)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.getBluetoothState(function(state)
            {
                if (state === cordova.plugins.diagnostic.bluetoothState + an, is)
                {
                    // Do something with Bluetooth
                }
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = (error);
            });
        },

        Isbluetoothavailable()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isBluetoothAvailable(function(available)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Bluetooth is " + (available ? "available" : "not available"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });

        },

        Isbluetoothenabled()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isBluetoothEnabled(function(enabled)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Bluetooth is " + (enabled ? "enabled" : "disabled"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Iswifiavailable()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isWifiAvailable(function(available)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("WiFi is " + (available ? "available" : "not available"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });

        },

        Iswifienabled()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isWifiEnabled(function(enabled)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("WiFi is " + (enabled ? "enabled" : "disabled"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Setwifistate(wi)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.setWifiState(function()
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Wifi was enabled");
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            },
            wi);

        },

        Iscameraavailable(ext1)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isCameraAvailable(
            {
                successCallback: function(available)
                {
                    self.res = ("Camera is " + (available ? "available" : "not available"));
                    self._trigger(self.ins.Core_Module);

                },
                errorCallback: function(error)
                {
                    self.res = ("The following error occurred: " + error);
                    self._trigger(self.ins.Core_Modulefail);
                },
                externalStorage: ext1
            });
        },

        Iscameraauthorized(ext2)
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.isCameraAuthorized(

            function(authorized)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("App is " + (authorized ? "authorized" : "denied") + " access to the camera");
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            },
            {
                externalStorage: ext2
            });

        },

        Getremotenotificationtypes()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.getRemoteNotificationTypes(function(types)
            {
                if (types[self.EMI_INDO.remoteNotificationType.ALERT])
                {
                    self._trigger(self.ins.Core_Module);
                    self.res = ("Has permission to display alerts");
                }
                if (types[self.EMI_INDO.remoteNotificationType.SOUND])
                {
                    self._trigger(self.ins.Core_Module);
                    self.res = ("Has permission to play sounds");
                }
                if (types[self.EMI_INDO.remoteNotificationType.BADGE])
                {
                    self._trigger(self.ins.Core_Module);
                    self.res = ("Has permission to modify icon badge");
                }
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });
        },

        Isremotenotificationsenabled()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;

            this.EMI_INDO.isRemoteNotificationsEnabled(function(enabled)
            {
                self._trigger(self.ins.Core_Module);
                self.res = ("Remote notifications are " + (enabled ? "enabled" : "disabled"));
            }, function(error)
            {
                self._trigger(self.ins.Core_Modulefail);
                self.res = ("The following error occurred: " + error);
            });

        },

        Ismicrophoneauthorized()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
            const self = this;
            this.EMI_INDO.isMicrophoneAuthorized(function(authorized)
            {
                self.res = ("App is " + (authorized ? "authorized" : "denied") + " access to the microphone");
                self._trigger(self.ins.Core_Module);
            }, function(error)
            {
                self.res = ("The following error occurred: " + error);
                self._trigger(self.ins.Core_Modulefail);
            });
        },

        Getmicrophoneauthorizationstatus()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.getMicrophoneAuthorizationStatus(function(status)
            {
                if (status === this.EMI_INDO.permissionStatus.GRANTED)
                {
                    self.res = (status);
                    self._trigger(self.ins.Core_Module);
                }
            }, function(error)
            {
                self.res = ("The following error occurred: " + error);
                self._trigger(self.ins.Core_Modulefail);
            });
        },

        Requestmicrophoneauthorization()
        {
            if (typeof cordova == 'undefined')
            {
                return;
            }
       
            const self = this;
            this.EMI_INDO.requestMicrophoneAuthorization(function(status)
            {
                if (status === this.EMI_INDO.permissionStatus.GRANTED)
                {
                    console.log("Microphone use is authorized");
                    self.res = (status);
                    self._trigger(self.ins.Core_Module);
                }
            }, function(error)
            {
                self.res = (error);
                self._trigger(self.ins.Core_Modulefail);
            });
        }
    };
}