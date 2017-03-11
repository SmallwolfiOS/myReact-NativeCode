//
//  MyShareBt.m
//  iOSNativeComponents
//
//  Created by Jason on 2017/3/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyShareBt.h"

@implementation MyShareBt


- (instancetype) initWithFrame:(CGRect)frame{
  if ((self = [super initWithFrame:frame])) {
    [self addTarget:self action:@selector(share)
   forControlEvents:UIControlEventTouchUpInside];
  }
  return self;
}

// 按钮分享事件
- (void)share {
  UIAlertView * alertView = [[UIAlertView alloc]initWithTitle:@"温馨提示" message:@"xxxxxxxx" delegate:nil cancelButtonTitle:nil otherButtonTitles:@"确定", nil];
  [alertView show];
}













/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
