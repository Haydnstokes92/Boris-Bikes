require_relative 'bike'


class DockingStation
  def release_bike
    Bike.new
  end

  def dock(bike)
    @bike = bike
  end

  def bike
    @bike
  end

  # this will essentially write the method above
  # on any instances of this class
  attr_reader :bike
end
