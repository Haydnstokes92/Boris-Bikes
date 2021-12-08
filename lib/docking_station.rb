require_relative 'bike'

class DockingStation
  def release_bike
    Bike.new
  end
end

class DockingStation

  def dock(bike)
    @bike = bike
  end
end

class DockingStation
  attr_reader :bike
end