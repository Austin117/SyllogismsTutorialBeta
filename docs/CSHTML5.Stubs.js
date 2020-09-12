/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("CSHTML5.Stubs", function ($asm, globals) {
    "use strict";

    Bridge.define("DotNetBrowser.JSValue", {
        statics: {
            methods: {
                Create: function (value) {
                    throw new System.NotImplementedException.ctor();
                },
                Create$1: function (value) {
                    throw new System.NotImplementedException.ctor();
                },
                Create$2: function (value) {
                    throw new System.NotImplementedException.ctor();
                },
                CreateJSON: function (jsonString) {
                    throw new System.NotImplementedException.ctor();
                },
                CreateNull: function () {
                    throw new System.NotImplementedException.ctor();
                },
                CreateUndefined: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsArray: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsBoolean: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsBooleanObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsDotNetObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsFunction: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsNumberObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsString: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsStringObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetBool: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetString: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsArray: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsBool: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsBooleanObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsDotNetObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsFalse: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsFunction: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsJSON: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsNull: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsNumberObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsString: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsStringObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsTrue: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsUndefined: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSContext", {
        inherits: [System.IDisposable],
        events: {
            DisposeEvent: null
        },
        props: {
            FrameId: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            },
            IsDisposed: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            },
            WorldId: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        methods: {
            CreateObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            Dispose: function () {
                throw new System.NotImplementedException.ctor();
            },
            Dispose$1: function (disposing) {
                throw new System.NotImplementedException.ctor();
            },
            equals: function (obj) {
                throw new System.NotImplementedException.ctor();
            },
            getHashCode: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSONString", {
        props: {
            Value: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        ctors: {
            ctor: function (value) {
                this.$initialize();
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("System.Dynamic.DynamicMetaObject");

    Bridge.define("System.Dynamic.IDynamicMetaObjectProvider", {
        $kind: "interface"
    });

    Bridge.define("System.Runtime.CompilerServices.CompilerGeneratedAttribute", {
        inherits: [System.Attribute],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });

    Bridge.define("System.Runtime.Serialization.OptionalFieldAttribute", {
        inherits: [System.Attribute],
        fields: {
            _versionAdded: 0
        },
        props: {
            VersionAdded: {
                get: function () {
                    return this._versionAdded;
                },
                set: function (value) {
                    if (value < 1) {
                        throw new System.ArgumentException.$ctor1("Serialization_OptionalFieldVersionValue");
                    }
this._versionAdded = value;
                }
            }
        },
        ctors: {
            init: function () {
                this._versionAdded = 1;
            },
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });

    Bridge.define("DotNetBrowser.JSObject", {
        inherits: [DotNetBrowser.JSValue],
        fields: {
            context: null
        },
        props: {
            Context: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            },
            IsDisposed: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsDotNetObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            AsObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetOwnPropertyNames: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetProperty: function (name) {
                throw new System.NotImplementedException.ctor();
            },
            GetPropertyNames: function () {
                throw new System.NotImplementedException.ctor();
            },
            HasProperty: function (name) {
                throw new System.NotImplementedException.ctor();
            },
            IsDotNetObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            RemoveProperty: function (name) {
                throw new System.NotImplementedException.ctor();
            },
            SetProperty: function (index, value) {
                throw new System.NotImplementedException.ctor();
            },
            SetProperty$1: function (name, value) {
                throw new System.NotImplementedException.ctor();
            },
            ToJSONString: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSPrimitive$1", function (T) { return {
        inherits: [DotNetBrowser.JSValue],
        ctors: {
            ctor: function () {
                this.$initialize();
                DotNetBrowser.JSValue.ctor.call(this);
                throw new System.NotImplementedException.ctor();
            }
        },
        methods: {
            toString: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    }; });

    Bridge.define("DotNetBrowser.JSNull", {
        inherits: [DotNetBrowser.JSValue],
        methods: {
            IsNull: function () {
                throw new System.NotImplementedException.ctor();
            },
            toString: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSArray", {
        inherits: [DotNetBrowser.JSObject],
        props: {
            Count: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            getItem: function (index) {
                throw new System.NotImplementedException.ctor();
            },
            setItem: function (index, value) {
                throw new System.NotImplementedException.ctor();
            },
            AsArray: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsArray: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSBoolean", {
        inherits: [DotNetBrowser.JSPrimitive$1(System.Boolean)],
        props: {
            Value: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsBoolean: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetBool: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsBool: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSBooleanObject", {
        inherits: [DotNetBrowser.JSObject],
        props: {
            ValueOf: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsBooleanObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetBool: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsBooleanObject: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSFunction", {
        inherits: [DotNetBrowser.JSObject],
        methods: {
            AsFunction: function () {
                throw new System.NotImplementedException.ctor();
            },
            Invoke: function (instance, args) {
                if (args === void 0) { args = []; }
                throw new System.NotImplementedException.ctor();
            },
            InvokeAndReturnValue: function (instance, args) {
                if (args === void 0) { args = []; }
                throw new System.NotImplementedException.ctor();
            },
            IsFunction: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSNumber", {
        inherits: [DotNetBrowser.JSPrimitive$1(System.Double)],
        props: {
            Value: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsNumber: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSNumberObject", {
        inherits: [DotNetBrowser.JSObject],
        props: {
            ValueOf: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsNumberObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetNumber: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsNumberObject: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSString", {
        inherits: [DotNetBrowser.JSPrimitive$1(System.String)],
        props: {
            Value: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsString: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetString: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsString: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("DotNetBrowser.JSStringObject", {
        inherits: [DotNetBrowser.JSObject],
        props: {
            ValueOf: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        methods: {
            AsStringObject: function () {
                throw new System.NotImplementedException.ctor();
            },
            GetString: function () {
                throw new System.NotImplementedException.ctor();
            },
            IsStringObject: function () {
                throw new System.NotImplementedException.ctor();
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU0hUTUw1LlN0dWJzLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJEb3ROZXRCcm93c2VyL0pTVmFsdWUuY3MiLCJEb3ROZXRCcm93c2VyL0pTQ29udGV4dC5jcyIsIkRvdE5ldEJyb3dzZXIvSlNPTlN0cmluZy5jcyIsIk1zY29ybGliU3R1ZmZfVG9CZU1vdmVkSW50b0JyaWRnZS9PcHRpb25hbEZpZWxkQXR0cmlidXRlLmNzIiwiRG90TmV0QnJvd3Nlci9KU09iamVjdC5jcyIsIkRvdE5ldEJyb3dzZXIvSlNQcmltaXRpdmUuY3MiLCJEb3ROZXRCcm93c2VyL0pTTnVsbC5jcyIsIkRvdE5ldEJyb3dzZXIvSlNBcnJheS5jcyIsIkRvdE5ldEJyb3dzZXIvSlNCb29sZWFuLmNzIiwiRG90TmV0QnJvd3Nlci9KU0Jvb2xlYW5PYmplY3QuY3MiLCJEb3ROZXRCcm93c2VyL0pTRnVuY3Rpb24uY3MiLCJEb3ROZXRCcm93c2VyL0pTTnVtYmVyLmNzIiwiRG90TmV0QnJvd3Nlci9KU051bWJlck9iamVjdC5jcyIsIkRvdE5ldEJyb3dzZXIvSlNTdHJpbmcuY3MiLCJEb3ROZXRCcm93c2VyL0pTU3RyaW5nT2JqZWN0LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztrQ0FnQnFDQTtvQkFBY0EsTUFBTUEsSUFBSUE7O29DQUN4QkE7b0JBQWdCQSxNQUFNQSxJQUFJQTs7b0NBQzFCQTtvQkFBZ0JBLE1BQU1BLElBQUlBOztzQ0FDbkJBO29CQUFxQkEsTUFBTUEsSUFBSUE7OztvQkFDOUJBLE1BQU1BLElBQUlBOzs7b0JBQ0xBLE1BQU1BLElBQUlBOzs7Ozs7Z0JBZmpCQSxNQUFNQSxJQUFJQTs7O2dCQUNOQSxNQUFNQSxJQUFJQTs7O2dCQUNFQSxNQUFNQSxJQUFJQTs7O2dCQUNwQkEsTUFBTUEsSUFBSUE7OztnQkFDVkEsTUFBTUEsSUFBSUE7OztnQkFDZEEsTUFBTUEsSUFBSUE7OztnQkFD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SUFBSUE7OztnQkFDYkEsTUFBTUEsSUFBSUE7Ozs7Ozs7Ozs7b0JDSmRBLE1BQU1BLElBQUlBOzs7Ozs7Z0JBRVVBLE1BQU1BLElBQUlBOzs7Z0JBQ3ZCQSxNQUFNQSxJQUFJQTs7O2dCQUNQQSxNQUFNQSxJQUFJQTs7Ozs7Ozs7OztvQkNKYkEsTUFBTUEsSUFBSUE7Ozs7OztnQkFFVEEsTUFBTUEsSUFBSUE7OztnQkFDWEEsTUFBTUEsSUFBSUE7OztnQkFDYkEsTUFBTUEsSUFBSUE7Ozs7Ozs7Ozs7b0JDSmRBLE1BQU1BLElBQUlBOzs7Ozs7Z0JBRVVBLE1BQU1BLElBQUlBOzs7Z0JBQ3ZCQSxNQUFNQSxJQUFJQTs7O2dCQUNQQSxNQUFNQSxJQUFJQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEpTQXJyYXkgQXNBcnJheSgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU0Jvb2xlYW4gQXNCb29sZWFuKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEpTQm9vbGVhbk9iamVjdCBBc0Jvb2xlYW5PYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgb2JqZWN0IEFzRG90TmV0T2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEpTRnVuY3Rpb24gQXNGdW5jdGlvbigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU051bWJlciBBc051bWJlcigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU051bWJlck9iamVjdCBBc051bWJlck9iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU09iamVjdCBBc09iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU1N0cmluZyBBc1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBKU1N0cmluZ09iamVjdCBBc1N0cmluZ09iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEpTVmFsdWUgQ3JlYXRlKGJvb2wgdmFsdWUpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEpTVmFsdWUgQ3JlYXRlKGRvdWJsZSB2YWx1ZSkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSlNWYWx1ZSBDcmVhdGUoc3RyaW5nIHZhbHVlKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBKU09OU3RyaW5nIENyZWF0ZUpTT04oc3RyaW5nIGpzb25TdHJpbmcpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEpTVmFsdWUgQ3JlYXRlTnVsbCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEpTVmFsdWUgQ3JlYXRlVW5kZWZpbmVkKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgR2V0Qm9vbCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBkb3VibGUgR2V0TnVtYmVyKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBHZXRTdHJpbmcoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc0FycmF5KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXNCb29sKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXNCb29sZWFuT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXNEb3ROZXRPYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNGYWxzZSgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzRnVuY3Rpb24oKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc0pTT04oKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc051bGwoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc051bWJlcigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzTnVtYmVyT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSXNPYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBJc1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzU3RyaW5nT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIElzVHJ1ZSgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIElzVW5kZWZpbmVkKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBEb3ROZXRCcm93c2VyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBKU0NvbnRleHQgOiBJRGlzcG9zYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBsb25nIEZyYW1lSWQgeyBnZXQgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfSB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNEaXNwb3NlZCB7IGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IH1cclxuICAgICAgICBwdWJsaWMgbG9uZyBXb3JsZElkIHsgZ2V0IHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyIERpc3Bvc2VFdmVudDtcclxuXHJcbiAgICAgICAgcHVibGljIEpTT2JqZWN0IENyZWF0ZU9iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdm9pZCBEaXNwb3NlKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIERpc3Bvc2UoYm9vbCBkaXNwb3NpbmcpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBFcXVhbHMob2JqZWN0IG9iaikgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBpbnQgR2V0SGFzaENvZGUoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIERvdE5ldEJyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEpTT05TdHJpbmdcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSlNPTlN0cmluZyhzdHJpbmcgdmFsdWUpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBWYWx1ZSB7IGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3lzdGVtLlJ1bnRpbWUuU2VyaWFsaXphdGlvblxyXG57XHJcbiAgICB1c2luZyBTeXN0ZW07XHJcbiAgICB1c2luZyBTeXN0ZW0uRGlhZ25vc3RpY3MuQ29udHJhY3RzO1xyXG5cclxuICAgIFtBdHRyaWJ1dGVVc2FnZShBdHRyaWJ1dGVUYXJnZXRzLkZpZWxkLCBJbmhlcml0ZWQgPSBmYWxzZSldXHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIE9wdGlvbmFsRmllbGRBdHRyaWJ1dGUgOiBBdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBpbnQgX3ZlcnNpb25BZGRlZCA9IDE7XHJcbiAgICAgICAgcHVibGljIE9wdGlvbmFsRmllbGRBdHRyaWJ1dGUoKSB7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBWZXJzaW9uQWRkZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZlcnNpb25BZGRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJTZXJpYWxpemF0aW9uX09wdGlvbmFsRmllbGRWZXJzaW9uVmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICBDb250cmFjdC5FbmRDb250cmFjdEJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBfdmVyc2lvbkFkZGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIERvdE5ldEJyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEpTT2JqZWN0IDogSlNWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBKU0NvbnRleHQgY29udGV4dDtcclxuXHJcbiAgICAgICAgcHVibGljIEpTQ29udGV4dCBDb250ZXh0IHsgZ2V0IHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBib29sIElzRGlzcG9zZWQgeyBnZXQgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBvYmplY3QgQXNEb3ROZXRPYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEpTT2JqZWN0IEFzT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBMaXN0PHN0cmluZz4gR2V0T3duUHJvcGVydHlOYW1lcygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgSlNWYWx1ZSBHZXRQcm9wZXJ0eShzdHJpbmcgbmFtZSkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBMaXN0PHN0cmluZz4gR2V0UHJvcGVydHlOYW1lcygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBIYXNQcm9wZXJ0eShzdHJpbmcgbmFtZSkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzRG90TmV0T2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZVByb3BlcnR5KHN0cmluZyBuYW1lKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgU2V0UHJvcGVydHkoaW50IGluZGV4LCBvYmplY3QgdmFsdWUpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBTZXRQcm9wZXJ0eShzdHJpbmcgbmFtZSwgb2JqZWN0IHZhbHVlKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBUb0pTT05TdHJpbmcoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIERvdE5ldEJyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIEpTUHJpbWl0aXZlPFQ+IDogSlNWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBKU1ByaW1pdGl2ZSgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IFQgVmFsdWUgeyBnZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNOdWxsIDogSlNWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8vcHVibGljIEpTTnVsbCgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBJc051bGwoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5SZWZsZWN0aW9uO1xyXG5cclxubmFtZXNwYWNlIERvdE5ldEJyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEpTQXJyYXkgOiBKU09iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBKU1ZhbHVlIHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IHNldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEpTQXJyYXkgQXNBcnJheSgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBJc0FycmF5KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBEb3ROZXRCcm93c2VyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBKU0Jvb2xlYW4gOiBKU1ByaW1pdGl2ZTxib29sPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIFZhbHVlIHsgZ2V0IHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgSlNCb29sZWFuIEFzQm9vbGVhbigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBHZXRCb29sKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzQm9vbCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNCb29sZWFuT2JqZWN0IDogSlNPYmplY3RcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYm9vbCBWYWx1ZU9mIHsgZ2V0IHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgSlNCb29sZWFuT2JqZWN0IEFzQm9vbGVhbk9iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBHZXRCb29sKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzQm9vbGVhbk9iamVjdCgpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNGdW5jdGlvbiA6IEpTT2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEpTRnVuY3Rpb24gQXNGdW5jdGlvbigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnZva2UoSlNPYmplY3QgaW5zdGFuY2UsIHBhcmFtcyBvYmplY3RbXSBhcmdzKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIEpTVmFsdWUgSW52b2tlQW5kUmV0dXJuVmFsdWUoSlNPYmplY3QgaW5zdGFuY2UsIHBhcmFtcyBvYmplY3RbXSBhcmdzKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgSXNGdW5jdGlvbigpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNOdW1iZXIgOiBKU1ByaW1pdGl2ZTxkb3VibGU+XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGRvdWJsZSBWYWx1ZSB7IGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEpTTnVtYmVyIEFzTnVtYmVyKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBkb3VibGUgR2V0TnVtYmVyKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzTnVtYmVyKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBEb3ROZXRCcm93c2VyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBKU051bWJlck9iamVjdCA6IEpTT2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGRvdWJsZSBWYWx1ZU9mIHsgZ2V0IHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgSlNOdW1iZXJPYmplY3QgQXNOdW1iZXJPYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGRvdWJsZSBHZXROdW1iZXIoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgSXNOdW1iZXJPYmplY3QoKSB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIERvdE5ldEJyb3dzZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEpTU3RyaW5nIDogSlNQcmltaXRpdmU8c3RyaW5nPlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVmFsdWUgeyBnZXQgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBKU1N0cmluZyBBc1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEdldFN0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBJc1N0cmluZygpIHsgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgRG90TmV0QnJvd3NlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSlNTdHJpbmdPYmplY3QgOiBKU09iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVmFsdWVPZiB7IGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEpTU3RyaW5nT2JqZWN0IEFzU3RyaW5nT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgR2V0U3RyaW5nKCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIElzU3RyaW5nT2JqZWN0KCkgeyB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTsgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
