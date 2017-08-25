
//  Created by apple on 2017/8/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

/*
 实现原生拨号
 */
#import "CallPhoneModuleIos.h"
#import <Foundation/Foundation.h>


@implementation CallPhoneModuleIos

RCT_EXPORT_MODULE(CallPhoneModuleIos);

RCT_EXPORT_METHOD(callPhone: (NSString *)phone){
  
   NSLog(@"======%@",phone);
//  NSMutableString * str = [[NSMutableString alloc] initWithFormat:@"telprompt://%@",phone];
//  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:str]];
  
}

// -(dispath_queue_t)methodQueue{
//     return dispath_get_main_queue();
// }

@end
