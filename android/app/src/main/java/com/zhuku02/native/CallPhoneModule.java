package com.zhuku02;

import android.content.Intent;
import android.net.Uri;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.lang.String;

public class CallPhoneModule extends ReactContextBaseJavaModule {

    public ReactApplicationContext reactContext;

    public CallPhoneModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void callPhone(String phoneString) {
        Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + phoneString));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        this.reactContext.startActivity(intent);
    }

    @Override
    public String getName() {
        return "CallPhoneModule";
    }
}