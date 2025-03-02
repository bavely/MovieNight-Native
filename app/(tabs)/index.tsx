import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useCallback, useEffect } from "react";
import BackGround from "../../components/BackGround";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../../services/movies";
import { RootState } from "../../utils/store";
import { Movie } from "../../types/movie";
import MovieItem from "@/components/MovieItem ";
const Home = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    status,
    error,
  }: {
    popularMovies: Movie[];
    topRatedMovies: Movie[];
    upcomingMovies: Movie[];
    status: string;
    error: string | null;
  } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies({ page: 1 }) as any);
    dispatch(fetchTopRatedMovies({ page: 1 }) as any);
    dispatch(fetchUpcomingMovies({ page: 1 }) as any);
  }, [dispatch]);
  const renderMovieItem = useCallback(
    ({ item }: { item: Movie }) => <MovieItem movie={item} />,
    [],
  );
  if (status === "loading") {
    return <ActivityIndicator size="large" color="#0000ff" className="mt-10" />;
  }

  if (status === "failed") {
    return (
      <Text className="text-red-500 text-center mt-10">Error: {error}</Text>
    );
  }
  return (
    <BackGround>
      <ScrollView
        className="bg-black/30  pt-10 "
        contentContainerStyle={styles.scrollContainer}
      >
        {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        {/* <View className="flex flex-row items-center justify-center" style={styles.viewContainer}> */}
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-32 h-32  shadow-white/50 shadow-xl rounded-full p-0"
        />

        <FlatList
          className="my-2 py-5 "
          data={popularMovies}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovieItem}
          initialNumToRender={10} // Render only 10 items at first
          maxToRenderPerBatch={10} // Limit batch size
          windowSize={5} // Increase for better memory usage
        />
        <FlatList
          className="my-2 py-5"
          data={topRatedMovies}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovieItem}
          initialNumToRender={10} // Render only 10 items at first
          maxToRenderPerBatch={10} // Limit batch size
          windowSize={5} // Increase for better memory usage
        />
        <FlatList
          className="my-2 py-5"
          data={upcomingMovies}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovieItem}
          initialNumToRender={10} // Render only 10 items at first
          maxToRenderPerBatch={10} // Limit batch size
          windowSize={5} // Increase for better memory usage
        />
        {/* </View> */}
      </ScrollView>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center", // Apply here for alignment
    justifyContent: "center", // Apply here for centering content
    padding: 20, // Optional padding
  },
});

export default Home;
