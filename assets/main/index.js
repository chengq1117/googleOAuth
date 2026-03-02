window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GoogleSignInUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2987bEGl55Kapd5iU4uC3a0", "GoogleSignInUtils");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GoogleSignInUtils = function() {
      function GoogleSignInUtils() {
        this.authSuccessCallback = null;
        this.authErrorCallback = null;
      }
      GoogleSignInUtils.getInstance = function() {
        if (!GoogleSignInUtils.instance) {
          GoogleSignInUtils.instance = new GoogleSignInUtils();
          GoogleSignInUtils.instance.init();
        }
        return GoogleSignInUtils.instance;
      };
      GoogleSignInUtils.prototype.init = function() {
        cc.game.on("on_GoogleLoginSuccess", function(params) {
          console.log("on_GoogleLoginSuccess", params);
          GoogleSignInUtils.instance.authSuccessCallback && GoogleSignInUtils.instance.authSuccessCallback(params);
          GoogleSignInUtils.instance.clean();
        });
        cc.game.on("on_GoogleLoginFailed", function() {
          GoogleSignInUtils.instance.authErrorCallback && GoogleSignInUtils.instance.authErrorCallback();
          GoogleSignInUtils.instance.clean();
        });
      };
      GoogleSignInUtils.prototype.GoogleSignIn = function(authSuccessCallback, authErrorCallback) {
        var _this = this;
        this.authSuccessCallback = authSuccessCallback;
        this.authErrorCallback = authErrorCallback;
        if (cc.sys.isNative) cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("AppController", "sendGoogleAuthReq:", "signIn") : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/GoogleSignInUtils", "signIn", "()V"); else {
          cc.log("GoogleLogin", window.google.accounts.id);
          var client = window.google.accounts.oauth2.initCodeClient({
            client_id: "1462738706-65t1sto1gmft09ekukq13v4af1cgrqjj.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
            ux_mode: "popup",
            callback: function(response) {
              return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  cc.log("handleCredentialResponse", response);
                  response.error ? cc.log("Google login failed", response.error) : cc.log("Google login success, code:", response.code);
                  return [ 2 ];
                });
              });
            },
            intermediate_iframe_close_callback: function() {
              cc.log("intermediate_iframe_close_callback");
            }
          });
          client.requestCode();
        }
      };
      GoogleSignInUtils.prototype.GoogleSignOut = function() {
        cc.sys.isNative ? cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("AppController", "logoutGoogle:", "signOut") : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/GoogleSignInUtils", "signOut", "()V") : cc.sys.isBrowser && cc.director.emit("GoogleLogout");
      };
      GoogleSignInUtils.prototype.getIdToken = function() {
        if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod("AppController", "getGoogleToken:", "getIdToken");
        if (cc.sys.os == cc.sys.OS_ANDROID) return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/GoogleSignInUtils", "getIdToken", "()Ljava/lang/String;");
      };
      GoogleSignInUtils.prototype.clean = function() {
        this.authSuccessCallback = null;
        this.authErrorCallback = null;
      };
      GoogleSignInUtils.instance = null;
      return GoogleSignInUtils;
    }();
    exports.default = GoogleSignInUtils;
    cc._RF.pop();
  }, {} ],
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GoogleSignInUtils_1 = require("./GoogleSignInUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.googleLoginBtn = null;
        return _this;
      }
      Helloworld.prototype.start = function() {
        var _this = this;
        this.label.string = this.text;
        this.googleLoginBtn.active = false;
        var script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        document.head.appendChild(script);
        script.onload = function() {
          _this.googleLoginBtn.active = true;
        };
      };
      Helloworld.prototype.googleLogin = function() {
        cc.log("googleLogin");
        GoogleSignInUtils_1.default.getInstance().GoogleSignIn(function(idToken) {
          cc.log("google login success, idToken:", idToken);
        }, function() {
          cc.log("google login error");
        });
      };
      __decorate([ property(cc.Label) ], Helloworld.prototype, "label", void 0);
      __decorate([ property ], Helloworld.prototype, "text", void 0);
      __decorate([ property(cc.Node) ], Helloworld.prototype, "googleLoginBtn", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    cc._RF.pop();
  }, {
    "./GoogleSignInUtils": "GoogleSignInUtils"
  } ]
}, {}, [ "GoogleSignInUtils", "Helloworld" ]);