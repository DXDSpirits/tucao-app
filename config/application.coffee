# For an explanation of the steroids.config properties, see the guide at
# http://guides.appgyver.com/steroids/guides/project_configuration/config-application-coffee/

steroids.config.name = "Tucao"

# -- Initial Location --
steroids.config.location = "http://localhost/index.html"

# -- Tab Bar --
steroids.config.tabBar.enabled = true
steroids.config.tabBar.tabs = [
  {
    title: "吐槽"
    icon: "assets/img/icons/disapprove@2x.png"
    location: "http://localhost/index.html"
  },
  {
    title: "共鸣"
    icon: "assets/img/icons/talk@2x.png"
    location: "http://localhost/index-reply.html"
  },
  {
    title: "探索"
    icon: "assets/img/icons/gps_searching@2x.png"
    location: "http://localhost/index-explore.html"
  },
  {
    title: "资料"
    icon: "assets/img/icons/user_male@2x.png"
    location: "http://localhost/index-profile.html"
  }
]

steroids.config.tabBar.tintColor = "#ffffff"
steroids.config.tabBar.tabTitleColor = "#777777"
steroids.config.tabBar.selectedTabTintColor = "#00aeef"
#steroids.config.tabBar.selectedTabBackgroundImage = "assets/img/pill@2x.png"

steroids.config.tabBar.backgroundImage = ""

# -- Navigation Bar --
steroids.config.navigationBar.tintColor = "#00aeef"
steroids.config.navigationBar.titleColor = "#ffffff"
steroids.config.navigationBar.buttonTintColor = "#ffffff"
steroids.config.navigationBar.buttonTitleColor = "#ffffff"

# steroids.config.navigationBar.landscape.backgroundImage = ""
# steroids.config.navigationBar.portrait.backgroundImage = ""

# -- Android Loading Screen
steroids.config.loadingScreen.tintColor = "#262626"

# -- iOS Status Bar --
steroids.config.statusBar.enabled = false
steroids.config.statusBar.style = "default"

# -- File Watcher --
# steroids.config.watch.exclude = ["www/my_excluded_file.js", "www/my_excluded_dir"]

# -- Pre- and Post-Make hooks --
# steroids.config.hooks.preMake.cmd = "echo"
# steroids.config.hooks.preMake.args = ["running yeoman"]
# steroids.config.hooks.postMake.cmd = "echo"
# steroids.config.hooks.postMake.args = ["cleaning up files"]

# -- Default Editor --
# steroids.config.editor.cmd = "subl"
# steroids.config.editor.args = ["."]