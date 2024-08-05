import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paw, Heart, Award, Bone } from "lucide-react";

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">Discover the World of Dogs</h1>
          <p className="text-xl mb-8">Man's best friend in all their furry glory</p>
          <Button size="lg" onClick={() => setLikes(likes + 1)}>
            <Heart className="mr-2 h-6 w-6" /> Show Some Love ({likes})
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="mb-8 transform hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Paw className="mr-2 text-blue-600" /> Characteristics of Dogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><Award className="mr-2 text-yellow-500" /> Loyal companions for millennia</li>
                <li className="flex items-center"><Heart className="mr-2 text-red-500" /> Unconditional love and affection</li>
                <li className="flex items-center"><Paw className="mr-2 text-green-500" /> Diverse breeds, sizes, and colors</li>
                <li className="flex items-center"><Award className="mr-2 text-purple-500" /> Highly intelligent and trainable</li>
                <li className="flex items-center"><Bone className="mr-2 text-orange-500" /> Excellent sense of smell and hearing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8 transform hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="mr-2 text-blue-600" /> Popular Dog Breeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-4">
                {["Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", 
                  "Bulldog", "Poodle", "Beagle", "Rottweiler"].map((breed, index) => (
                  <li key={index} className="flex items-center">
                    <Paw className="mr-2 text-blue-400" /> {breed}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Gallery of Adorable Dogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1517849845537-4d257902454a",
              "https://images.unsplash.com/photo-1534361960057-19889db9621e",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            ].map((url, index) => (
              <img 
                key={index}
                src={url}
                alt={`Cute dog ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
