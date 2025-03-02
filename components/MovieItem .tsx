import React from "react";
import { View, Text, Image } from "react-native";
import { Movie } from "../types/movie";
const MovieItem = (props: { movie: Movie }) => {
  const { movie } = props;
  return (
    <View className="mb-4 mx-5 h-60 max-h-60 w-40 max-w-40 flex flex-col items-start justify-center">
      {movie.poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          className="w-40 h-52 rounded-lg"
        />
      ) : (
        <Text>No Image Available</Text>
      )}
      <View className="">
        <Text className="font-bold truncate text-sm text-clip overflow-hidden w-40 max-w-40    mt-3 text-yellow-500"  numberOfLines={1} ellipsizeMode="tail">
          {movie.title}
        </Text>
        <Text className="text-gray-500">
          ⭐ {movie.vote_average.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export default MovieItem;
