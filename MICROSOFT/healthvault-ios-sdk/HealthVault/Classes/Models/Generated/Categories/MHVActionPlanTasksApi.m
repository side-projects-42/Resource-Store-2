//
// MHVActionPlanTasksApi.m
// MHVLib
//
// Copyright (c) 2017 Microsoft Corporation. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/**
* NOTE: This class is auto generated by the swagger code generator program.
* https://github.com/swagger-api/swagger-codegen.git
* Do not edit the class manually.
*/


#import <Foundation/Foundation.h>
#import "MHVRemoteMonitoringClient.h"
#import "MHVJsonSerializer.h"
#import "MHVActionPlanTasksApi.h"
#import "MHVActionPlanTask.h"
#import "MHVActionPlanTaskInstance.h"
#import "MHVActionPlanTasksResponseActionPlanTaskInstance_.h"
#import "MHVErrorResponse.h"


@implementation MHVRemoteMonitoringClient (MHVActionPlanTasksApi)

NSString* _Nonnull kMHVActionPlanTasksApiErrorDomain = @"MHVActionPlanTasksApiErrorDomain";
NSInteger kMHVActionPlanTasksApiMissingParamErrorCode = 234513;

#pragma mark - Api Methods

///
/// Post a new action plan task
/// 
///  @param actionPlanTask The action plan task to create. 
/// 
- (void)actionPlanTasksCreateWithActionPlanTask:(MHVActionPlanTask* _Nonnull)actionPlanTask
    completion:(void(^_Nonnull)(MHVActionPlanTaskInstance* _Nullable output, NSError* _Nullable error))completion
{
    // verify the required parameter 'actionPlanTask' is set
    if (actionPlanTask == nil)
    {
        NSParameterAssert(actionPlanTask);
        if(completion)
        {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"actionPlanTask"] };
            NSError* error = [NSError errorWithDomain:kMHVActionPlanTasksApiErrorDomain code:kMHVActionPlanTasksApiMissingParamErrorCode userInfo:userInfo];
            completion(nil, error);
        }

        return;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];

    NSData *bodyParam = nil;
    NSString *json = [MHVJsonSerializer serialize:actionPlanTask];
    bodyParam = [json dataUsingEncoding:NSUTF8StringEncoding];

    [self requestWithPath:resourcePath
                      httpMethod:@"POST"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                     resultClass:[MHVActionPlanTaskInstance class]
                      completion:completion];
}

///
/// Delete a task by id
/// 
///  @param actionPlanTaskId The unique identifer of the task. 
/// 
- (void)actionPlanTasksDeleteWithActionPlanTaskId:(NSString* _Nonnull)actionPlanTaskId
    completion:(void(^_Nonnull)(NSError* _Nullable error))completion
{
    // verify the required parameter 'actionPlanTaskId' is set
    if (actionPlanTaskId == nil)
    {
        NSParameterAssert(actionPlanTaskId);
        if(completion)
        {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"actionPlanTaskId"] };
            NSError* error = [NSError errorWithDomain:kMHVActionPlanTasksApiErrorDomain code:kMHVActionPlanTasksApiMissingParamErrorCode userInfo:userInfo];
            completion(error);
        }

        return;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks/{actionPlanTaskId}"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (actionPlanTaskId != nil)
    {
        pathParams[@"actionPlanTaskId"] = actionPlanTaskId;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];

    NSData *bodyParam = nil;

    [self requestWithPath:resourcePath
                      httpMethod:@"DELETE"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                      completion:completion];
}

///
/// Get a collection of task definitions
/// 
///  @param actionPlanTaskStatus An optional status used to filter the results. (optional)
/// 
- (void)actionPlanTasksGetWithActionPlanTaskStatus:(MHVActionPlanTaskInstanceStatusEnum* _Nullable)actionPlanTaskStatus
    completion:(void(^_Nonnull)(MHVActionPlanTasksResponseActionPlanTaskInstance_* _Nullable output, NSError* _Nullable error))completion
{
    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (actionPlanTaskStatus != nil)
    {
        queryParams[@"actionPlanTaskStatus"] = actionPlanTaskStatus;
    }

    NSData *bodyParam = nil;

    [self requestWithPath:resourcePath
                      httpMethod:@"GET"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                     resultClass:[MHVActionPlanTasksResponseActionPlanTaskInstance_ class]
                      completion:completion];
}

///
/// Get a task by id
/// 
///  @param actionPlanTaskId The unique identifer of the task. 
/// 
- (void)actionPlanTasksGetByIdWithActionPlanTaskId:(NSString* _Nonnull)actionPlanTaskId
    completion:(void(^_Nonnull)(MHVActionPlanTaskInstance* _Nullable output, NSError* _Nullable error))completion
{
    // verify the required parameter 'actionPlanTaskId' is set
    if (actionPlanTaskId == nil)
    {
        NSParameterAssert(actionPlanTaskId);
        if(completion)
        {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"actionPlanTaskId"] };
            NSError* error = [NSError errorWithDomain:kMHVActionPlanTasksApiErrorDomain code:kMHVActionPlanTasksApiMissingParamErrorCode userInfo:userInfo];
            completion(nil, error);
        }

        return;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks/{actionPlanTaskId}"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (actionPlanTaskId != nil)
    {
        pathParams[@"actionPlanTaskId"] = actionPlanTaskId;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];

    NSData *bodyParam = nil;

    [self requestWithPath:resourcePath
                      httpMethod:@"GET"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                     resultClass:[MHVActionPlanTaskInstance class]
                      completion:completion];
}

///
/// Put an update for an action plan task
/// 
///  @param actionPlanTask The updated action plan task. 
/// 
- (void)actionPlanTasksReplaceWithActionPlanTask:(MHVActionPlanTaskInstance* _Nonnull)actionPlanTask
    completion:(void(^_Nonnull)(MHVActionPlanTaskInstance* _Nullable output, NSError* _Nullable error))completion
{
    // verify the required parameter 'actionPlanTask' is set
    if (actionPlanTask == nil)
    {
        NSParameterAssert(actionPlanTask);
        if(completion)
        {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"actionPlanTask"] };
            NSError* error = [NSError errorWithDomain:kMHVActionPlanTasksApiErrorDomain code:kMHVActionPlanTasksApiMissingParamErrorCode userInfo:userInfo];
            completion(nil, error);
        }

        return;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];

    NSData *bodyParam = nil;
    NSString *json = [MHVJsonSerializer serialize:actionPlanTask];
    bodyParam = [json dataUsingEncoding:NSUTF8StringEncoding];

    [self requestWithPath:resourcePath
                      httpMethod:@"PUT"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                     resultClass:[MHVActionPlanTaskInstance class]
                      completion:completion];
}

///
/// Patch an update for an action plan task
/// 
///  @param actionPlanTask The updated task 
/// 
- (void)actionPlanTasksUpdateWithActionPlanTask:(MHVActionPlanTaskInstance* _Nonnull)actionPlanTask
    completion:(void(^_Nonnull)(MHVActionPlanTaskInstance* _Nullable output, NSError* _Nullable error))completion
{
    // verify the required parameter 'actionPlanTask' is set
    if (actionPlanTask == nil)
    {
        NSParameterAssert(actionPlanTask);
        if(completion)
        {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"actionPlanTask"] };
            NSError* error = [NSError errorWithDomain:kMHVActionPlanTasksApiErrorDomain code:kMHVActionPlanTasksApiMissingParamErrorCode userInfo:userInfo];
            completion(nil, error);
        }

        return;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/ActionPlanTasks"];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];

    NSData *bodyParam = nil;
    NSString *json = [MHVJsonSerializer serialize:actionPlanTask];
    bodyParam = [json dataUsingEncoding:NSUTF8StringEncoding];

    [self requestWithPath:resourcePath
                      httpMethod:@"PATCH"
                      pathParams:pathParams
                     queryParams:queryParams
                            body:bodyParam
                     resultClass:[MHVActionPlanTaskInstance class]
                      completion:completion];
}



@end