//
//  TwitterPlugin.h
//  TwitterPlugin
//
//  Created by Antonelli Brian on 10/13/11.
//

#import <Foundation/Foundation.h>
#import <Twitter/Twitter.h>
#import <Accounts/Accounts.h>
#import "CDVDeprecated.h"
@interface TwitterPlugin : CDVPlugin{
}

- (void) isTwitterAvailable:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
    
- (void) isTwitterSetup:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) composeTweet:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) getPublicTimeline:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) getMentions:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

- (void) performCallbackOnMainThreadforJS:(NSString*)js;

@end
