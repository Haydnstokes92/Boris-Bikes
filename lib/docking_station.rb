require_relative 'bike'

class DockingStation
  def release_bike
    fail 'No bikes available' unless @bike
    @bike
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

def release_bike
  @bike
end