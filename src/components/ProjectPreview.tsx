import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Camera, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  Zap,
  BarChart3,
  Video,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const ProjectPreview = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const features = [
    {
      icon: Camera,
      title: "Real-time Pose Detection",
      description: "Advanced AI analyzes your batting stance and movement in real-time",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Technique Analysis",
      description: "Get detailed feedback on your cricket shots with precision scoring",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Video,
      title: "Video Upload Analysis",
      description: "Upload your practice videos for comprehensive technique breakdown",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor your improvement over time with detailed analytics",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { label: "Accuracy", value: 95, icon: Target },
    { label: "Response Time", value: 85, icon: Zap },
    { label: "User Satisfaction", value: 92, icon: Star }
  ];

  const shotTypes = [
    "Straight Drive", "Cover Drive", "Pull Shot", "Cut Shot", 
    "Sweep Shot", "Hook Shot", "Flick Shot", "Defensive"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
      setAnimationClass("animate-fade-in");
      setTimeout(() => setAnimationClass(""), 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              AI-Powered Cricket Training
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cricket Shot Trainer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Master your cricket technique with real-time AI analysis and personalized coaching feedback
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Training
              </Button>
              <Button variant="outline" size="lg">
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeFeature === index 
                      ? 'ring-2 ring-primary shadow-lg bg-primary/5' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className={`relative ${animationClass}`}>
              <Card className="h-80 bg-gradient-to-br from-card to-muted/20 border-2 border-dashed border-primary/30">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className={`p-6 rounded-full bg-gradient-to-r ${features[activeFeature].color} mx-auto w-fit`}>
                      {React.createElement(features[activeFeature].icon, {
                        className: "h-12 w-12 text-white"
                      })}
                    </div>
                    <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                    <p className="text-muted-foreground max-w-sm">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{stat.value}%</div>
                    <Progress value={stat.value} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Shots */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Supported Cricket Shots</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI recognizes and provides feedback for all major cricket batting techniques
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shotTypes.map((shot, index) => (
              <Card key={index} className="group hover:scale-105 transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{shot}</h3>
                  <CheckCircle className="h-4 w-4 text-green-500 mx-auto mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
            <p className="text-muted-foreground">Powered by cutting-edge AI and web technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                  MediaPipe AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google's MediaPipe for real-time pose detection and analysis
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  React & TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern web technologies for a responsive and fast user experience
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Real-time Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced algorithms for instant feedback and performance tracking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 hero-bg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Game?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of cricketers already using AI-powered coaching to perfect their technique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Users className="mr-2 h-5 w-5" />
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPreview;