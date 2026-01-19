import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Target, 
  Trophy, 
  TrendingUp, 
  Camera, 
  BarChart3,
  Play,
  BookOpen,
  Star,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentStats = {
    practiceTime: 45,
    accuracy: 78,
    improvement: 12,
    goalsCompleted: 3
  };

  const recentSessions = [
    { shot: "Cover Drive", player: "Virat Kohli", score: 85, date: "Today" },
    { shot: "Straight Drive", player: "Sachin Tendulkar", score: 92, date: "Yesterday" },
    { shot: "Pull Shot", player: "Brian Lara", score: 76, date: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CricMentor
          </h1>
          <p className="text-lg text-muted-foreground">
            AN AI FORM CORRECTOR
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{recentStats.practiceTime}m</div>
              <div className="text-xs text-muted-foreground">Practice Time</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{recentStats.accuracy}%</div>
              <div className="text-xs text-muted-foreground">Avg Accuracy</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">+{recentStats.improvement}%</div>
              <div className="text-xs text-muted-foreground">Improvement</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold">{recentStats.goalsCompleted}</div>
              <div className="text-xs text-muted-foreground">Goals Complete</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/training">
            <Card className="hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <CardTitle>Live Training</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Practice with real-time AI analysis and instant feedback
                </p>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Start Training
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/players">
            <Card className="hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
                <CardTitle>Player Library</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Study techniques from 50+ cricket legends
                </p>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Players
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analysis">
            <Card className="hover:shadow-lg transition-all cursor-pointer group">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                <CardTitle>Progress Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Detailed analytics and improvement tracking
                </p>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analysis
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Sessions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Training Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">{session.shot}</div>
                    <div className="text-sm text-muted-foreground">vs {session.player}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant={session.score >= 85 ? "default" : session.score >= 70 ? "secondary" : "destructive"}>
                      {session.score}%
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{session.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Cover Drive</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Straight Drive</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Pull Shot</span>
                  <span className="text-sm font-medium">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>

              <div className="pt-4">
                <Link to="/progress">
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Detailed Progress
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;