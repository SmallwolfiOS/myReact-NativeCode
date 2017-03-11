/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "Orientation.h"

@implementation AppDelegate
//- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
//  return [Orientation getOrientation];
//}
- (BOOL)application:(UIApplication *)application didFinishLaunchingWiOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index12.ios" fallbackResource:nil];
//  jsCodeLocation = [NSURL URLWithString:@"http://10.2.8.206:8081/index16.ios.bundle?platform-ios&dev-true"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Helloworld"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  rootView.backgroundColor = [UIColor redColor];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  self.window.backgroundColor = [UIColor redColor];
  return YES;
}
- (void )action:(RCTRootView *)view{//index8.ios
    NSArray *imageList = @[@"http://img14.360buyimg.com/n6/jfs/t2470/82/1814353400/71200/fc7cc396/5682332dNefd81168.jpg",
                         @"http://img14.360buyimg.com/n6/jfs/t2302/185/1539902046/108529/8ce25d4a/56cab238N3f08696b.jpg"];
  NSDictionary *props = @{@"images" : imageList};
  view.appProperties = props;
}
@end
