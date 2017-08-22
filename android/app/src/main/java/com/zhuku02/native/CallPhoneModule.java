package com.zhuku02;

import android.content.Intent;
import android.net.Uri;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CallPhoneModule extends ReactContextBaseJavaModule {

    public ReactApplicationContext reactContext;

    public CallPhoneModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void callPhone() {
        Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + "4007773177"));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        this.reactContext.startActivity(intent);
    }

    @Override
    public String getName() {
        return "CallPhoneModule";
    }
}