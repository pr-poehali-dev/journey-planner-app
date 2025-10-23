import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const stats = [
    { 
      icon: "Globe", 
      value: "47", 
      label: "Посещено стран", 
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    { 
      icon: "Route", 
      value: "125,430", 
      label: "Пройдено км", 
      color: "from-emerald-500 to-teal-500",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    { 
      icon: "Users", 
      value: "12,845", 
      label: "Подписчики", 
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    { 
      icon: "Trophy", 
      value: "89/120", 
      label: "Достижения", 
      color: "from-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500"
    },
  ];

  const leaderboard = [
    { 
      name: "Мария Соколова", 
      level: 52, 
      countries: 63, 
      xp: 145820, 
      badge: "Легенда",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    { 
      name: "Дмитрий Волков", 
      level: 51, 
      countries: 59, 
      xp: 142350, 
      badge: "Мастер",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry"
    },
    { 
      name: "Елена Новикова", 
      level: 48, 
      countries: 55, 
      xp: 138920, 
      badge: "Эксперт",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    },
  ];

  const activities = [
    {
      user: "Мария Соколова",
      action: "разблокировала достижение",
      detail: "Легенда путешествий",
      time: "5 минут назад",
      icon: "Star",
      color: "text-yellow-500"
    },
    {
      user: "Дмитрий Волков",
      action: "поднялся на",
      detail: "2 место в рейтинге",
      time: "15 минут назад",
      icon: "TrendingUp",
      color: "text-green-500"
    },
    {
      user: "Елена Новикова",
      action: "посетила новую страну",
      detail: "Исландия",
      time: "1 час назад",
      icon: "MapPin",
      color: "text-blue-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-purple-500 to-cyan-500 flex items-center justify-center">
              <Icon name="Compass" className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Центр Влияния
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 hover:scale-105 transition-transform">
              <Icon name="Search" size={18} />
              Поиск
            </Button>
            <div className="flex items-center gap-3 border-l pl-3">
              <div className="relative">
                <Icon name="Bell" size={20} className="text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </div>
              <Avatar className="w-10 h-10 ring-2 ring-purple-500 ring-offset-2">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                <AvatarFallback>АП</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-semibold">Александр Петров</p>
                <p className="text-xs text-muted-foreground">PRO Путешественник</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8 overflow-hidden border-0 shadow-xl animate-scale-in">
          <div className="h-48 bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 relative">
            <img 
              src="https://cdn.poehali.dev/files/6ab76586-0800-4421-a7a2-e17406909092.png" 
              alt="Profile Background" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <Button 
              variant="secondary" 
              size="sm" 
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white gap-2"
            >
              <Icon name="Edit" size={16} />
              Редактировать профиль
            </Button>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center -mt-20 md:-mt-16">
              <Avatar className="w-32 h-32 ring-4 ring-white shadow-xl">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                <AvatarFallback className="text-3xl">АП</AvatarFallback>
              </Avatar>
              <div className="flex-1 mt-16 md:mt-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">Александр Петров</h2>
                  <Badge className="bg-gradient-to-r from-orange-500 to-purple-500 text-white border-0">
                    <Icon name="Crown" size={14} className="mr-1" />
                    PRO
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Профессиональный путешественник | Блогер | Фотограф приключений
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    Москва, Россия
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    Присоединился в январе 2022
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Уровень 45</span>
                      <span className="text-sm text-muted-foreground">1,550 XP до следующего уровня</span>
                    </div>
                    <Progress value={65} className="h-2 bg-gray-200">
                      <div className="h-full bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 rounded-full transition-all" style={{ width: '65%' }} />
                    </Progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl ${stat.iconBg} flex items-center justify-center shadow-lg`}>
                  <Icon name={stat.icon as any} className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-0 shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Рейтинг Путешественников</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                >
                  <Icon name="Award" size={16} />
                  Мои награды
                </Button>
              </div>
              <Tabs defaultValue="global" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-gray-100">
                  <TabsTrigger value="global" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                    <Icon name="Globe" size={16} className="mr-2" />
                    Глобальный
                  </TabsTrigger>
                  <TabsTrigger value="country" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                    <Icon name="Flag" size={16} className="mr-2" />
                    По стране
                  </TabsTrigger>
                  <TabsTrigger value="friends" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-purple-500 data-[state=active]:text-white">
                    <Icon name="Users" size={16} className="mr-2" />
                    Друзья
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="global" className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-gray-300 w-8">{index + 1}</div>
                        <Avatar className="w-12 h-12 ring-2 ring-purple-400 ring-offset-2">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{user.name}</p>
                            <Badge variant="secondary" className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                              {user.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Award" size={14} />
                              Уровень {user.level}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Globe" size={14} />
                              {user.countries} стран
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Zap" size={14} />
                              {user.xp.toLocaleString()} XP
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-purple-100">
                          <Icon name="UserPlus" size={18} className="text-purple-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-orange-100">
                          <Icon name="MessageCircle" size={18} className="text-orange-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-red-100">
                          <Icon name="Flame" size={18} className="text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="country">
                  <div className="text-center py-12 text-muted-foreground">
                    <Icon name="Flag" size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Рейтинг по странам скоро появится</p>
                  </div>
                </TabsContent>
                <TabsContent value="friends">
                  <div className="text-center py-12 text-muted-foreground">
                    <Icon name="Users" size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>Пригласите друзей для соревнования</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          <Card className="border-0 shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Лента Активности</h3>
                <Button variant="ghost" size="icon">
                  <Icon name="RefreshCw" size={18} />
                </Button>
              </div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                        <span className="text-purple-600 font-medium">{activity.detail}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                      activity.color === 'text-yellow-500' ? 'from-yellow-400 to-orange-500' :
                      activity.color === 'text-green-500' ? 'from-green-400 to-emerald-500' :
                      'from-blue-400 to-cyan-500'
                    } flex items-center justify-center`}>
                      <Icon name={activity.icon as any} size={16} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
