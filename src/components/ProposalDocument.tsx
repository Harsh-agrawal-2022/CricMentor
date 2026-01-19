import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";

const ProposalDocument = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9;

  const pages = [
    {
      title: "Executive Summary",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Cricket Shot Trainer</h1>
            <p className="text-xl text-muted-foreground">AI-Powered Cricket Coaching Platform</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">🎯 Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To democratize cricket coaching through AI-powered pose analysis, making professional-level technique feedback accessible to players worldwide.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">💡 Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Provide instant, accurate, and actionable feedback on cricket batting technique using computer vision technology.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.5M</div>
                <div className="text-sm text-muted-foreground">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6 Months</div>
                <div className="text-sm text-muted-foreground">Development Timeline</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
            <p className="text-muted-foreground mb-4">
              Traditional cricket coaching is expensive, time-consuming, and often inaccessible to amateur players. 
              With over 100 million cricket players worldwide, there's a massive gap between demand for quality 
              coaching and its availability.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Solution</h3>
            <p className="text-muted-foreground">
              Our AI-powered platform provides instant, professional-level coaching feedback using computer vision 
              and pose detection technology, making quality cricket coaching accessible anytime, anywhere.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Market Analysis",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Market Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Cricket Market</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Market Size (2024)</span>
                    <span className="font-semibold">$6.2B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Growth (2024-2029)</span>
                    <span className="font-semibold">12.3% CAGR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Cricket Apps</span>
                    <span className="font-semibold">$450M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Target Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Amateur Players (12-35)</span>
                    <span className="font-semibold">65M globally</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cricket Academies</span>
                    <span className="font-semibold">25,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Players</span>
                    <span className="font-semibold">100,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Direct Competitors</h4>
                  <p className="text-muted-foreground text-sm">Limited AI-powered cricket coaching apps with basic video analysis</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Indirect Competitors</h4>
                  <p className="text-muted-foreground text-sm">Traditional coaching, YouTube tutorials, cricket academies</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">Our Advantage</h4>
                  <p className="text-muted-foreground text-sm">Real-time pose detection, instant feedback, comprehensive shot analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Market Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Short-term (0-2 years)</h4>
                <p className="text-sm text-muted-foreground">Focus on amateur players in cricket-loving countries (India, Australia, England)</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Medium-term (2-5 years)</h4>
                <p className="text-sm text-muted-foreground">Expand to coaching academies and professional training facilities</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Long-term (5+ years)</h4>
                <p className="text-sm text-muted-foreground">Global expansion and multi-sport AI coaching platform</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Product Overview",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Product Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Live Practice Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time pose detection and analysis</li>
                  <li>• Instant audio coaching feedback</li>
                  <li>• Visual joint accuracy indicators</li>
                  <li>• Live scoring system</li>
                  <li>• Multiple camera angle support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Video Analysis Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Upload and analyze recorded shots</li>
                  <li>• Frame-by-frame breakdown</li>
                  <li>• Detailed accuracy reports</li>
                  <li>• Comparative analysis with professionals</li>
                  <li>• Export analysis reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Supported Cricket Shots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold">Cover Drive</h4>
                  <p className="text-sm text-muted-foreground">Classic front-foot stroke</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold">Pull Shot</h4>
                  <p className="text-sm text-muted-foreground">Aggressive back-foot shot</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold">Straight Drive</h4>
                  <p className="text-sm text-muted-foreground">Perfect timing technique</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Technical Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">AI & Machine Learning</h4>
                <ul className="text-sm space-y-1">
                  <li>• MediaPipe pose detection</li>
                  <li>• Biomechanical angle analysis</li>
                  <li>• Pattern recognition algorithms</li>
                  <li>• Continuous learning system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">User Experience</h4>
                <ul className="text-sm space-y-1">
                  <li>• Intuitive web interface</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Responsive design</li>
                  <li>• Accessibility features</li>
                </ul>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-xs text-muted-foreground">Pose Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">&lt;50ms</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30fps</div>
                  <div className="text-xs text-muted-foreground">Real-time Processing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Technical Architecture",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Technical Architecture</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Frontend</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• React 18 with TypeScript</li>
                    <li>• Vite for fast development</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Shadcn/ui components</li>
                    <li>• React Query for state management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">AI & Computer Vision</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• MediaPipe Pose Landmarker</li>
                    <li>• TensorFlow.js integration</li>
                    <li>• WebGL acceleration</li>
                    <li>• Real-time video processing</li>
                    <li>• Custom pose analysis algorithms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Backend (Future)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Supabase for data management</li>
                    <li>• PostgreSQL database</li>
                    <li>• Real-time subscriptions</li>
                    <li>• Edge functions</li>
                    <li>• Cloud storage integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold">Client-Side Processing</h5>
                    <p className="text-sm text-muted-foreground">Real-time pose detection runs entirely in the browser for privacy and speed</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h5 className="font-semibold">Progressive Web App</h5>
                    <p className="text-sm text-muted-foreground">Offline capabilities and native app-like experience</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-semibold">Scalable Infrastructure</h5>
                    <p className="text-sm text-muted-foreground">Cloud-native architecture ready for millions of users</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Local video processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">GDPR compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Data anonymization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Secure API endpoints</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Frontend Optimizations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Code splitting and lazy loading</li>
                    <li>• WebGL acceleration for video processing</li>
                    <li>• Efficient state management</li>
                    <li>• Optimized bundle size (&lt;2MB)</li>
                    <li>• Service worker caching</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">AI Performance</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimized model inference</li>
                    <li>• Multi-threading support</li>
                    <li>• Hardware acceleration (GPU/NPU)</li>
                    <li>• Adaptive quality based on device</li>
                    <li>• Intelligent frame sampling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Scalability Plan</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Phase 1: MVP</h4>
                <p className="text-sm text-muted-foreground">Client-side processing, basic shot analysis</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Phase 2: Backend</h4>
                <p className="text-sm text-muted-foreground">User accounts, progress tracking, cloud analysis</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Phase 3: Scale</h4>
                <p className="text-sm text-muted-foreground">Global CDN, mobile apps, advanced AI features</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Business Model</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl mb-2">🆓</div>
                  Free Tier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-sm text-muted-foreground">Forever Free</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 3 basic shots (Cover Drive, Pull, Straight)</li>
                  <li>• Real-time pose detection</li>
                  <li>• Basic scoring</li>
                  <li>• 5 video analyses per month</li>
                  <li>• Community support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  Pro Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary">$9.99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• All 12 cricket shots</li>
                  <li>• Advanced biomechanical analysis</li>
                  <li>• Unlimited video analyses</li>
                  <li>• Progress tracking & analytics</li>
                  <li>• Personalized coaching tips</li>
                  <li>• Export detailed reports</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  Academy Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold">$99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Everything in Pro</li>
                  <li>• Multi-student dashboard</li>
                  <li>• Batch video processing</li>
                  <li>• Custom shot references</li>
                  <li>• API access</li>
                  <li>• Dedicated support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Primary Revenue</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Subscription Revenue (Pro)</span>
                      <span className="font-semibold">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Academy Licenses</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Premium Features</span>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Future Revenue</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Equipment Partnerships</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Corporate Training</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Licensing</span>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Penetration Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Year 1: Foundation</h5>
                    <p className="text-sm text-muted-foreground">Focus on cricket enthusiasts and amateur players</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Year 2: Expansion</h5>
                    <p className="text-sm text-muted-foreground">Partner with cricket academies and coaches</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Year 3: Scale</h5>
                    <p className="text-sm text-muted-foreground">International expansion and enterprise solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Organic (SEO, Content)</span>
                    <span className="font-semibold">$5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social Media Marketing</span>
                    <span className="font-semibold">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paid Advertising</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Partnership Referrals</span>
                    <span className="font-semibold">$8</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Average CAC</span>
                    <span>$13</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Competitive Advantages</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• First-mover advantage in AI cricket coaching</li>
                <li>• Real-time processing without cloud dependency</li>
                <li>• Lower operational costs due to client-side processing</li>
                <li>• Strong technical moat with custom algorithms</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Freemium model for viral growth</li>
                <li>• Network effects through community features</li>
                <li>• High switching costs for academy customers</li>
                <li>• Continuous improvement through user data</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Marketing Strategy",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Marketing Strategy</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Target Customer Personas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Amateur Player (Primary)</h4>
                    <p className="text-sm text-muted-foreground">Ages 16-35, plays recreational cricket, wants to improve technique</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold">Cricket Coach (Secondary)</h4>
                    <p className="text-sm text-muted-foreground">Professional coaches looking for analytical tools to help students</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Cricket Parent (Tertiary)</h4>
                    <p className="text-sm text-muted-foreground">Parents of young cricket players seeking cost-effective coaching</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Geographic Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-primary">Phase 1 Markets</h5>
                    <p className="text-sm">India, Australia, England, South Africa</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary">Phase 2 Markets</h5>
                    <p className="text-sm">Pakistan, Sri Lanka, Bangladesh, New Zealand</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary">Phase 3 Markets</h5>
                    <p className="text-sm">West Indies, Afghanistan, Ireland, Scotland</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Go-to-Market Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Content Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cricket technique blog posts</li>
                    <li>• YouTube coaching videos</li>
                    <li>• Social media tips and tricks</li>
                    <li>• Professional player partnerships</li>
                    <li>• SEO-optimized content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Community Building</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Reddit cricket communities</li>
                    <li>• Discord coaching groups</li>
                    <li>• Facebook cricket pages</li>
                    <li>• Local cricket club partnerships</li>
                    <li>• User-generated content campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Influencer Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cricket YouTuber partnerships</li>
                    <li>• Professional player endorsements</li>
                    <li>• Coach testimonials</li>
                    <li>• Cricket podcast sponsorships</li>
                    <li>• Social media collaborations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Google Ads (Search)</span>
                    <span className="font-semibold text-primary">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>YouTube Advertising</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Facebook/Instagram Ads</span>
                    <span className="font-semibold text-primary">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Content Marketing</span>
                    <span className="font-semibold text-primary">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Marketing</span>
                    <span className="font-semibold text-primary">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Partnership Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">Equipment Manufacturers</h5>
                    <p className="text-sm text-muted-foreground">Gray-Nicolls, Kookaburra, MRF partnerships</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Cricket Academies</h5>
                    <p className="text-sm text-muted-foreground">White-label solutions and revenue sharing</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Sports Apps</h5>
                    <p className="text-sm text-muted-foreground">Integration with cricket scoring apps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Budget Allocation (Year 1)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Digital Advertising: $180,000</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Google Ads</span>
                      <span>$70,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>YouTube Ads</span>
                      <span>$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Social Media Ads</span>
                      <span>$40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retargeting</span>
                      <span>$20,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Content & Partnerships: $120,000</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Content Creation</span>
                      <span>$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Influencer Partnerships</span>
                      <span>$40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PR & Events</span>
                      <span>$20,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tools & Analytics</span>
                      <span>$10,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Launch Strategy</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Pre-Launch</h4>
                <p className="text-xs text-muted-foreground">Beta testing, content creation, influencer outreach</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Soft Launch</h4>
                <p className="text-xs text-muted-foreground">Limited release in India with heavy PR focus</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Full Launch</h4>
                <p className="text-xs text-muted-foreground">Global availability with paid advertising campaigns</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Growth</h4>
                <p className="text-xs text-muted-foreground">Optimization, partnerships, feature expansion</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Financial Projections",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Financial Projections</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>5-Year Revenue Projections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Metric</th>
                      <th className="text-right py-2">Year 1</th>
                      <th className="text-right py-2">Year 2</th>
                      <th className="text-right py-2">Year 3</th>
                      <th className="text-right py-2">Year 4</th>
                      <th className="text-right py-2">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-2">Total Users</td>
                      <td className="text-right py-2">25,000</td>
                      <td className="text-right py-2">75,000</td>
                      <td className="text-right py-2">200,000</td>
                      <td className="text-right py-2">450,000</td>
                      <td className="text-right py-2">850,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Pro Subscribers</td>
                      <td className="text-right py-2">2,500</td>
                      <td className="text-right py-2">11,250</td>
                      <td className="text-right py-2">40,000</td>
                      <td className="text-right py-2">112,500</td>
                      <td className="text-right py-2">255,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Academy Licenses</td>
                      <td className="text-right py-2">10</td>
                      <td className="text-right py-2">50</td>
                      <td className="text-right py-2">200</td>
                      <td className="text-right py-2">500</td>
                      <td className="text-right py-2">1,000</td>
                    </tr>
                    <tr className="border-b font-semibold">
                      <td className="py-2">Total Revenue</td>
                      <td className="text-right py-2">$312K</td>
                      <td className="text-right py-2">$1.41M</td>
                      <td className="text-right py-2">$5.04M</td>
                      <td className="text-right py-2">$14.1M</td>
                      <td className="text-right py-2">$31.8M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown (Year 3)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Pro Subscriptions ($9.99/mo)</span>
                    <span className="font-semibold">$4.79M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Academy Licenses ($99/mo)</span>
                    <span className="font-semibold">$238K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Premium Features</span>
                    <span className="font-semibold">$12K</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$5.04M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cost Structure (Year 3)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Personnel Costs</span>
                    <span className="font-semibold">$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Marketing & Sales</span>
                    <span className="font-semibold">$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infrastructure & Operations</span>
                    <span className="font-semibold">$400K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>R&D</span>
                    <span className="font-semibold">$600K</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total Costs</span>
                    <span>$4.0M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Key Financial Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$13</div>
                  <div className="text-sm text-muted-foreground">Customer Acquisition Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$480</div>
                  <div className="text-sm text-muted-foreground">Customer Lifetime Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">37:1</div>
                  <div className="text-sm text-muted-foreground">LTV:CAC Ratio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8.5%</div>
                  <div className="text-sm text-muted-foreground">Monthly Churn Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funding Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Seed Round: $500K</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Product development completion</li>
                    <li>• Initial marketing campaigns</li>
                    <li>• Core team expansion (3-5 people)</li>
                    <li>• 18 months runway</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Series A: $3M (Year 2)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Aggressive user acquisition</li>
                    <li>• International expansion</li>
                    <li>• Advanced AI features</li>
                    <li>• Team scaling (15-20 people)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Profitability Timeline</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Year 1-2</h4>
                <p className="text-sm text-muted-foreground">Investment phase: Focus on product-market fit and user acquisition</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Year 3</h4>
                <p className="text-sm text-muted-foreground">Break-even: $5M revenue, $4M costs, $1M profit</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Year 4-5</h4>
                <p className="text-sm text-muted-foreground">Growth phase: 25%+ profit margins, scale internationally</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Exit Strategy Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Strategic Acquisition (Year 4-5)</h4>
                  <p className="text-sm text-muted-foreground">ESPN, Fox Sports, or major sports technology company</p>
                  <p className="text-sm font-semibold">Estimated Valuation: $50-100M</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold">Private Equity (Year 5-7)</h4>
                  <p className="text-sm text-muted-foreground">Continue growth as independent sports tech platform</p>
                  <p className="text-sm font-semibold">Estimated Valuation: $100-200M</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold">IPO (Year 7-10)</h4>
                  <p className="text-sm text-muted-foreground">Public offering as part of broader sports technology portfolio</p>
                  <p className="text-sm font-semibold">Estimated Valuation: $200M+</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Implementation Timeline",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Implementation Timeline</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Phase 1: MVP Development (Months 1-3)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Core Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Real-time pose detection system
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      3 basic cricket shots (Cover, Pull, Straight)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Scoring algorithm implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Basic UI/UX design
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Video analysis capability
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technical Milestones</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      MediaPipe integration complete
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Cross-browser compatibility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Mobile responsiveness
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Performance optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Beta testing framework
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phase 2: Market Validation (Months 4-6)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Beta Testing</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 100 beta testers</li>
                    <li>• Cricket club partnerships</li>
                    <li>• Feedback collection system</li>
                    <li>• Performance metrics tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Product Iteration</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• UI/UX improvements</li>
                    <li>• Algorithm refinements</li>
                    <li>• Bug fixes and optimization</li>
                    <li>• Additional shot types</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Market Research</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• User behavior analysis</li>
                    <li>• Pricing strategy validation</li>
                    <li>• Competitive analysis</li>
                    <li>• Go-to-market planning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phase 3: Product Launch (Months 7-9)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Product Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Freemium pricing model implementation</li>
                      <li>• User authentication system</li>
                      <li>• Progress tracking dashboard</li>
                      <li>• Social sharing capabilities</li>
                      <li>• Customer support system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Marketing Launch</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Content marketing campaigns</li>
                      <li>• Social media presence</li>
                      <li>• Influencer partnerships</li>
                      <li>• PR and media outreach</li>
                      <li>• Paid advertising campaigns</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Launch Targets</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">1,000</div>
                      <div className="text-xs text-muted-foreground">Launch Week Users</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">5,000</div>
                      <div className="text-xs text-muted-foreground">Month 1 Users</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">100</div>
                      <div className="text-xs text-muted-foreground">Paying Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">$1K</div>
                      <div className="text-xs text-muted-foreground">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phase 4: Growth & Scale (Months 10-12)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Product Expansion</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• All 12 cricket shots implemented</li>
                    <li>• Advanced analytics dashboard</li>
                    <li>• Mobile app development starts</li>
                    <li>• API for third-party integrations</li>
                    <li>• Academy management tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Business Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cricket academy partnerships</li>
                    <li>• Equipment manufacturer deals</li>
                    <li>• International market expansion</li>
                    <li>• Series A funding preparation</li>
                    <li>• Team scaling (hire 10+ people)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Year 2 Roadmap (Months 13-24)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary">Q1 Year 2</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Mobile app launch</li>
                      <li>• Advanced AI features</li>
                      <li>• User community platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Q2 Year 2</h4>
                    <ul className="text-sm space-y-1">
                      <li>• International expansion</li>
                      <li>• Multi-language support</li>
                      <li>• Enterprise solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Q3-Q4 Year 2</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Advanced coaching features</li>
                      <li>• Professional partnerships</li>
                      <li>• Series A funding round</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Resource Requirements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Technical Team</h4>
                <ul className="text-sm space-y-1">
                  <li>• 2 Frontend developers</li>
                  <li>• 1 AI/ML engineer</li>
                  <li>• 1 Backend developer</li>
                  <li>• 1 DevOps engineer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Business Team</h4>
                <ul className="text-sm space-y-1">
                  <li>• 1 Product manager</li>
                  <li>• 1 Marketing specialist</li>
                  <li>• 1 Cricket domain expert</li>
                  <li>• 1 Customer success manager</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Advisors</h4>
                <ul className="text-sm space-y-1">
                  <li>• Former cricket professional</li>
                  <li>• Sports technology expert</li>
                  <li>• AI/ML researcher</li>
                  <li>• Business development mentor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Risk Analysis & Mitigation",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">Risk Analysis & Mitigation</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Technology Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400">High Risk: Pose Detection Accuracy</h4>
                  <p className="text-sm text-muted-foreground mb-2">AI model may not be accurate enough for professional coaching</p>
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Continuous model training with expert-labeled data</li>
                      <li>• Multiple camera angle support for better accuracy</li>
                      <li>• Human coach validation system for critical feedback</li>
                      <li>• Gradual rollout with accuracy thresholds</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Medium Risk: Browser Compatibility</h4>
                  <p className="text-sm text-muted-foreground mb-2">MediaPipe may not work on all devices and browsers</p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Comprehensive device and browser testing</li>
                      <li>• Fallback to simplified analysis for unsupported devices</li>
                      <li>• Progressive enhancement approach</li>
                      <li>• Clear system requirements communication</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Low Risk: Performance Issues</h4>
                  <p className="text-sm text-muted-foreground mb-2">Real-time processing may be too slow on older devices</p>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Adaptive quality settings based on device capability</li>
                      <li>• Optimized algorithms for mobile processors</li>
                      <li>• Cloud processing option for complex analysis</li>
                      <li>• Regular performance monitoring and optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400">High Risk: Market Adoption</h4>
                  <p className="text-sm text-muted-foreground mb-2">Cricket players may prefer traditional coaching methods</p>
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Strong value proposition focusing on accessibility and cost</li>
                      <li>• Partnership with respected cricket coaches for endorsements</li>
                      <li>• Free tier to reduce barriers to trial</li>
                      <li>• Educational content about AI coaching benefits</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Medium Risk: Competition</h4>
                  <p className="text-sm text-muted-foreground mb-2">Large sports companies may develop similar solutions</p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Focus on cricket-specific expertise and domain knowledge</li>
                      <li>• Rapid feature development and innovation</li>
                      <li>• Strong brand building in cricket community</li>
                      <li>• Patent key technological innovations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Low Risk: Seasonal Demand</h4>
                  <p className="text-sm text-muted-foreground mb-2">Cricket is seasonal in some markets</p>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Global market expansion to balance seasonal variations</li>
                      <li>• Indoor training content and features</li>
                      <li>• Diversification into other sports (future)</li>
                      <li>• Year-round engagement through gamification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Medium Risk: Funding Challenges</h4>
                  <p className="text-sm text-muted-foreground mb-2">Difficulty raising funds in competitive sports tech market</p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Bootstrap initially with lean development approach</li>
                      <li>• Strong traction metrics before seeking funding</li>
                      <li>• Multiple funding source options (angels, VCs, grants)</li>
                      <li>• Revenue generation from early stages</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Medium Risk: Team Retention</h4>
                  <p className="text-sm text-muted-foreground mb-2">Key technical talent may be poached by larger companies</p>
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Competitive compensation and equity packages</li>
                      <li>• Strong company culture and mission alignment</li>
                      <li>• Professional development opportunities</li>
                      <li>• Distributed team to access global talent</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Low Risk: Regulatory Changes</h4>
                  <p className="text-sm text-muted-foreground mb-2">Data privacy regulations may impact video processing</p>
                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                    <h5 className="font-semibold text-sm">Mitigation Strategies:</h5>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Privacy-by-design approach with local processing</li>
                      <li>• GDPR and other privacy compliance from day one</li>
                      <li>• Transparent data usage policies</li>
                      <li>• Regular legal and compliance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Monitoring & Response Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Risk Indicators</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• User engagement metrics (session duration, retention)</li>
                    <li>• Technical performance metrics (accuracy, speed)</li>
                    <li>• Customer satisfaction scores and feedback</li>
                    <li>• Competitive landscape monitoring</li>
                    <li>• Market adoption rates by region</li>
                    <li>• Team satisfaction and retention rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Response Protocols</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Weekly risk assessment reviews</li>
                    <li>• Quarterly strategic pivots if needed</li>
                    <li>• Emergency response team for critical issues</li>
                    <li>• Stakeholder communication plans</li>
                    <li>• Alternative strategy development</li>
                    <li>• Crisis management procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Overall Risk Assessment</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Low</div>
                <div className="text-sm text-muted-foreground">Technical Risk</div>
                <p className="text-xs mt-1">Proven technologies with good fallback options</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">Medium</div>
                <div className="text-sm text-muted-foreground">Market Risk</div>
                <p className="text-xs mt-1">Strong market need but adoption challenges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Low</div>
                <div className="text-sm text-muted-foreground">Business Risk</div>
                <p className="text-xs mt-1">Experienced team with clear strategy</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Cricket Shot Trainer</h1>
              <p className="text-muted-foreground">Business Proposal Document</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Page Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>

        {/* Current Page Content */}
        <Card className="min-h-[600px]">
          <CardHeader>
            <CardTitle className="text-2xl">{pages[currentPage - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>
            {pages[currentPage - 1].content}
          </CardContent>
        </Card>

        {/* Page Navigation Footer */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            variant="outline" 
            onClick={prevPage}
            disabled={currentPage === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {pages[currentPage - 1].title}
          </div>
          
          <Button 
            variant="outline" 
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProposalDocument;