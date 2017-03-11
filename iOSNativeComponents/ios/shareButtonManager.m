  //
//  shareButtonManager.m
//  iOSNativeComponents
//
//  Created by Jason on 2017/3/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "shareButtonManager.h"
#import "MyShareBt.h"


@interface shareButtonManager ()
@property (nonatomic) MyShareBt *bt;
@end


@implementation shareButtonManager


RCT_EXPORT_MODULE()

- (UIView *)view
{
  _bt = [[MyShareBt alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
  _bt.backgroundColor = [UIColor redColor];
  return _bt;
}




@end
