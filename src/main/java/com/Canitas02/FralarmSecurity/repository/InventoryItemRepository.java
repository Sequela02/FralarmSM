package com.Canitas02.FralarmSecurity.repository;

import com.Canitas02.FralarmSecurity.model.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long> {
    // Custom queries can be added here if necessary
}
