puts "Starting to create Seed Data..."

puts "Creating Categories"
catJournal = Category.create(name: "Journal Entry")
catNews = Category.create(name: "News Story")
catStatus = Category.create(name: "Status Report")

puts "Creating Users"
happy = User.create(username: "HappyHelper", email: "happy@helper.com")
grumpy = User.create(username: "GrumpyGus", email: "grumpy@gus.com")
meh = User.create(username: "MehMister", email: "meh@mister.com")

puts "Creating Posts"
postJournal = Post.create(title: "Dear Diary", content: "Today the weather is my favorite.")
postNews = Post.create(title: "Latest creates!", content: "It was really intense")
postStatus = Post.create(title: "Server is Down", content: "Might be back soon.")

puts "Creating Comments"
Comment.create(content: "This is great!", user: happy, post: postJournal)
Comment.create(content: "Time has passed, I still think that!", user: happy, post: postJournal)
Comment.create(content: "This is great, even I agree!", user: grumpy, post: postJournal)
Comment.create(content: "What an outrage.", user: grumpy, post: postNews)
Comment.create(content: "When will it be back?", user: meh, post: postStatus)

puts "Done creating Seed Data!"