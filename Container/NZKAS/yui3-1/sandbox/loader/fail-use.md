Steps to reproduce :  
1. Click on button 1 (use module one). Note module is loaded and Y.use callback is called.  
2. Disconnect from network  
3. Click on button 2 - this will cause a failed load attempt on an unrelated module  
4. Click on button 1 again. Use callback will not get called even though module \#1 is loaded.  
Note once reconnected, things recover.
