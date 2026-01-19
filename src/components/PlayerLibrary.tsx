import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Filter, 
  Star,
  Trophy,
  Globe,
  Calendar,
  Target,
  Play,
  ArrowUpDown,
  SlidersHorizontal,
  X
} from "lucide-react";
import { CRICKET_GOATS, type PlayerProfile, SHOT_TYPES } from "@/data/cricketGoats";
import { Link } from "react-router-dom";

const PlayerLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedEra, setSelectedEra] = useState("all");
  const [selectedShot, setSelectedShot] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [minAverage, setMinAverage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const countries = useMemo(() => [...new Set(CRICKET_GOATS.map(player => player.country))].sort(), []);
  const eras = useMemo(() => [...new Set(CRICKET_GOATS.map(player => player.era.split("-")[0]))].sort(), []);
  
  // Get all available shots across all players
  const availableShots = useMemo(() => {
    const shots = new Set<string>();
    CRICKET_GOATS.forEach(player => {
      Object.keys(player.shots).forEach(shot => shots.add(shot));
    });
    return Array.from(shots).sort();
  }, []);

  const filteredPlayers = useMemo(() => {
    return CRICKET_GOATS.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCountry = selectedCountry === "all" || player.country === selectedCountry;
      const matchesEra = selectedEra === "all" || player.era.startsWith(selectedEra);
      const matchesShot = selectedShot === "all" || Object.keys(player.shots).includes(selectedShot);
      const matchesAverage = player.battingAverage >= minAverage;
      
      return matchesSearch && matchesCountry && matchesEra && matchesShot && matchesAverage;
    }).sort((a, b) => {
      switch (sortBy) {
        case "average-desc":
          return b.battingAverage - a.battingAverage;
        case "average-asc":
          return a.battingAverage - b.battingAverage;
        case "centuries-desc":
          return b.centuries - a.centuries;
        case "centuries-asc":
          return a.centuries - b.centuries;
        case "shots-desc":
          return Object.keys(b.shots).length - Object.keys(a.shots).length;
        case "shots-asc":
          return Object.keys(a.shots).length - Object.keys(b.shots).length;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, selectedCountry, selectedEra, selectedShot, minAverage, sortBy]);

  const activeFiltersCount = [
    selectedCountry !== "all",
    selectedEra !== "all",
    selectedShot !== "all",
    minAverage > 0
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSelectedCountry("all");
    setSelectedEra("all");
    setSelectedShot("all");
    setMinAverage(0);
    setSearchTerm("");
  };

  const getPlayerRating = (player: PlayerProfile) => {
    const avgAccuracy = Object.values(player.shots).reduce((sum, shot) => sum + shot.accuracy, 0) / Object.keys(player.shots).length;
    return Math.round(avgAccuracy);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cricket Legends Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Study and learn from the greatest cricket players of all time
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Top Row: Search and Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={showFilters ? "default" : "outline"}
                    size="default"
                    onClick={() => setShowFilters(!showFilters)}
                    className="whitespace-nowrap"
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2 rounded-full px-2">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                  
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetFilters}
                      title="Clear all filters"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Expandable Filters */}
              {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-2 flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      Country
                    </Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="All Countries" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="all">All Countries</SelectItem>
                        {countries.map(country => (
                          <SelectItem key={country} value={country}>{country}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Era
                    </Label>
                    <Select value={selectedEra} onValueChange={setSelectedEra}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="All Eras" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="all">All Eras</SelectItem>
                        {eras.map(era => (
                          <SelectItem key={era} value={era}>{era}s</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-2 flex items-center">
                      <Target className="h-3 w-3 mr-1" />
                      Specialty Shot
                    </Label>
                    <Select value={selectedShot} onValueChange={setSelectedShot}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="All Shots" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50 max-h-[300px]">
                        <SelectItem value="all">All Shots</SelectItem>
                        {availableShots.map(shot => (
                          <SelectItem key={shot} value={shot}>
                            {shot.replace(/([A-Z])/g, ' $1').trim()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-2 flex items-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      Min. Batting Avg: {minAverage}
                    </Label>
                    <Slider
                      value={[minAverage]}
                      onValueChange={(value) => setMinAverage(value[0])}
                      max={65}
                      min={0}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {/* Sort Options */}
              <div className="flex items-center gap-2 pt-2 border-t">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <Label className="text-xs text-muted-foreground">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px] h-8 bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="average-desc">Avg. (High to Low)</SelectItem>
                    <SelectItem value="average-asc">Avg. (Low to High)</SelectItem>
                    <SelectItem value="centuries-desc">Centuries (Most)</SelectItem>
                    <SelectItem value="centuries-asc">Centuries (Least)</SelectItem>
                    <SelectItem value="shots-desc">Shots (Most)</SelectItem>
                    <SelectItem value="shots-asc">Shots (Least)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="ml-auto text-sm text-muted-foreground">
                  {filteredPlayers.length} player{filteredPlayers.length !== 1 ? 's' : ''} found
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold">{filteredPlayers.length}</div>
              <div className="text-xs text-muted-foreground">Legends Available</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">{countries.length}</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-xs text-muted-foreground">Shot Variations</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-muted-foreground">Avg Accuracy</div>
            </CardContent>
          </Card>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <Card key={player.id} className="hover:shadow-lg transition-all group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-lg">{player.name}</CardTitle>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {player.country}
                </div>
                <Badge variant="outline" className="w-fit mx-auto">
                  {player.era}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="font-semibold text-primary">{player.battingAverage}</div>
                    <div className="text-xs text-muted-foreground">Average</div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{player.centuries}</div>
                    <div className="text-xs text-muted-foreground">Centuries</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-1">
                    {player.specialties.slice(0, 2).map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Available Shots:</div>
                  <div className="text-xs text-muted-foreground">
                    {Object.keys(player.shots).length} shot variations
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to={`/player/${player.id}`}>
                    <Button className="w-full" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Study Technique
                    </Button>
                  </Link>
                  
                  <Link to={`/training?player=${player.id}`}>
                    <Button variant="outline" className="w-full" size="sm">
                      <Target className="mr-2 h-4 w-4" />
                      Practice vs {player.name.split(' ')[0]}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No players found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PlayerLibrary;