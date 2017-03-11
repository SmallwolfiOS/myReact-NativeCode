//
//  ViewController.m
//  iOSAndRN
//
//  Created by Jason on 16/8/19.
//  Copyright © 2016年 Jason. All rights reserved.
//

#import "ViewController.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import "ViewController3.h"

@interface ViewController ()

@end

@implementation ViewController


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
//    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                          moduleName        : @"iOSAndRN"
                         initialProperties :nil
                         launchOptions    : nil];
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

@end
