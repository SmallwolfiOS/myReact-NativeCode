//
//  ViewController2.m
//  hunheDemo
//
//  Created by Jason on 16/8/8.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "ViewController2.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "ViewController3.h"

@interface ViewController2 ()

@end

@implementation ViewController2

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  //  self.title = @"dsada";
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"hunheDemo"
                                               initialProperties:nil
                                                   launchOptions:nil];
  self.view = rootView;
}
- (void)viewWillAppear:(BOOL)animated{
  [super viewWillAppear:animated];
  [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(RNOpenVC) name:@"RNOpenVC" object:nil];
}
- (void)viewWillDisappear:(BOOL)animated{
  [super viewWillDisappear:animated];
  [[NSNotificationCenter defaultCenter]removeObserver:self];
}
- (void)RNOpenVC {
  [self performSelectorOnMainThread:@selector(avtion) withObject:nil waitUntilDone:NO];
  
}
- (void)avtion{
  ViewController3 * pushVC = [[UIStoryboard storyboardWithName:@"Main" bundle:nil]instantiateViewControllerWithIdentifier:@"ViewController3"];
  [self.navigationController pushViewController:pushVC animated:YES];
  //  [self performSegueWithIdentifier:@"seg" sender:nil];
  //  [self presentViewController:pushVC animated:YES completion:nil];
  NSLog(@"555555");

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
