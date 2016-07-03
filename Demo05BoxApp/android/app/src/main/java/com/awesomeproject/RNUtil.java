package com.awesomeproject;

import android.content.Context;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

import com.facebook.react.ReactInstanceManager;

/**
 * Created by liumeng on 11/25/15.
 */
public class RNUtil {
    public static void setJSServer(String hostPort, Context context) {
        SharedPreferences mPreferences = PreferenceManager.getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = mPreferences.edit();
        editor.putString("debug_http_host", hostPort);
        editor.apply();
    }

    public static void setAutoReloadOnJsChange(boolean autoReloadOnJsChange, Context context) {
        SharedPreferences mPreferences = PreferenceManager.getDefaultSharedPreferences(context);
        SharedPreferences.Editor editor = mPreferences.edit();
        editor.putBoolean("reload_on_js_change", autoReloadOnJsChange);
        editor.apply();
    }

    public static void reloadJs(ReactInstanceManager reactInstanceManager) {
        reactInstanceManager.getDevSupportManager().handleReloadJS();
    }
}
