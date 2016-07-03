package com.awesomeproject;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * 1 （网络）网络上拉取最新bundle 并缓存到 app cache中
 * 2 （cache）如果从网上拉取失败 则 从 app cache 中取
 * 3 （asset）如果app cache 中拉取失败 则 从asset 取 并缓存到 app cache中
 * 4 如果asset没有 则 报错
 * <p/>
 * AutoReloadOnJsChange（Live Reload 是重新fetch bundle） 的原理  app 里有个线程在跟 React Packager  时时连接着
 * <p/>
 * Hot Reload  是只加载有变化的js
 * <p/>
 * JS Dev Mode :js 文件里边的log开关  ????单独搞一个方法出来
 * <p/>
 * JS Mifify 测试js混淆
 * <p/>
 * Animations FPS Summaries 打印动画的帧
 * <p/>
 * js 包结构????
 */
public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RNUtil.setJSServer("10.97.195.35:8081", this);
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }

    //即使JSServer不通,也会通过Asset里的bundle正常显示
    protected String getBundleAssetName() {
        return "index.android.bundle";
    }

    //从JSServer拉取bundle时的路径
    protected String getJSMainModuleName() {
        return "index.android";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage()
        );
    }
}
