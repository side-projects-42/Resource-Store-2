# play framework booking demo

\#{if user?.id}

Connected as ${user.username} | [Search](<@%7BHotels.index()%7D>) | [Settings](<@%7BHotels.settings()%7D>) | [Logout](<@%7BApplication.logout()%7D>)

\#{/if}

\#{if flash.error}

**${flash.error}**

\#{/if} \#{if flash.success}

**${flash.success}**

\#{/if} \#{doLayout /}

Created with [play framework](http://www.playframework.org) and really inspirated from the booking sample application provided by [seam framework](http://seamframework.org/)
